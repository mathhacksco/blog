/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice, First } from 'react-iterators';

import { fetchPosts, fetchPostsByCategory } from '../../redux/actionCreators/posts';
import { fetchCategories } from '../../redux/actionCreators/categories';
import { getPosts } from '../../redux/selectors/posts';
import { getCategories } from '../../redux/selectors/categories';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import FeaturedPostExcerpt from '../featured-post-excerpt/FeaturedPostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';
import * as Debug from '../../utils/DebugUtil';
import PostCollection from '../../models/PostCollection';
import Navigation from '../navigation/Navigation';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './Home.styles.scss';

import type { Id } from '../../types/general';
import type State from '../../models/State';
import type CategoryCollection from '../../models/CategoryCollection';
import type { Dispatch } from '../../types/redux';

type OwnProps = {};

type StateProps = {
  posts: PostCollection;
  categories: CategoryCollection;
};

type DispatchProps = {
  fetchPosts: () => Promise<void>;
  fetchPostsByCategory: Id => Promise<void>;
  fetchCategories: () => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
  return {
    posts: getPosts(state),
    categories: getCategories(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPostsByCategory: (id: Id) => dispatch(fetchPostsByCategory(id)),
    fetchCategories: () => dispatch(fetchCategories())
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component<Props, {}> {

  props: Props;
  state = {}

  componentDidMount() {
    GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.HomePage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Home Page View'
    });
    this.props.fetchPosts();
    this.fetchFeaturedPosts();
  }

  async fetchFeaturedPosts() {
    await this.props.fetchCategories();
    const featuredCategory = this.props.categories.find(c => c.slug === 'featured');
    if (!featuredCategory) {
      await Debug.logErrorMessage('Failed to find featured category.');
      return;
    }
    await this.props.fetchPostsByCategory(featuredCategory.id);
  }

  getFeaturedPosts(): PostCollection {
    const featuredCategory = this.props.categories.find(c => c.slug === 'featured');
    if (!featuredCategory) {
      return new PostCollection();
    }
    return this.props.posts.filter(p => p.hasCategory(featuredCategory.id));
  }

  render() {
    const featuredPosts = this.getFeaturedPosts();
    const featuredPostsArray = featuredPosts.toArray();
    const latestPostsArray = this.props.posts.exclude(featuredPosts).toArray();
    return (
      <div>
        <First
          array={featuredPostsArray}
          container={({ children }) => (
            <div className="homepage-hero">
              <div className="homepage-hero-background">
                <div className="top-gradient"/>
                <div className="bottom-gradient"/>
              </div>
              <HorizontallyCentered>
                <ContentMaxWidth>
                  <Navigation/>
                  {children}
                </ContentMaxWidth>
              </HorizontallyCentered>
            </div>
          )}
          render={post => (
            <FeaturedPostExcerpt key={post.id} id={post.id} post={post} categories={this.props.categories}/>
          )}
        />
        <HorizontallyCentered>
          <ContentMaxWidth>
            <Slice
              start={1}
              end={4}
              array={featuredPostsArray}
              render={sliced => (
                <Map
                  container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
                  array={sliced}
                  render={post => <PostExcerpt key={post.id} id={post.id} post={post} categories={this.props.categories} />}
                />
              )}
            />
            <Slice
              start={0}
              end={6}
              array={latestPostsArray}
              render={sliced => (
                <Map
                  container={({ children }) => (
                    <RowLayout className="homepage-row-2">
                      {children}
                    </RowLayout>
                  )}
                  array={sliced}
                  render={post => <PostExcerpt id={post.id} post={post} categories={this.props.categories}/>}
                />
              )}
            />
          </ContentMaxWidth>
        </HorizontallyCentered>
      </div>
    );
  }
}