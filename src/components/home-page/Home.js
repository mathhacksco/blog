/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice, First } from 'react-iterators';

import { fetchPosts, fetchFeaturedPosts } from '../../redux/actionCreators/posts';
import { fetchCategories } from '../../redux/actionCreators/categories';
import { getPosts, getFeaturedPosts } from '../../redux/selectors/posts';
import { getCategories } from '../../redux/selectors/categories';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import FeaturedPostExcerpt from '../featured-post-excerpt/FeaturedPostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';

// $FlowFixMe
import './Home.styles.scss';

import type State from '../../models/State';
import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';
import type { Dispatch } from '../../types/redux';

type OwnProps = {};

type StateProps = {
  posts: PostCollection;
  featuredPosts: PostCollection;
  categories: CategoryCollection;
};

type DispatchProps = {
  fetchPosts: () => Promise<void>;
  fetchFeaturedPosts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
  return {
    posts: getPosts(state),
    featuredPosts: getFeaturedPosts(state),
    categories: getCategories(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchFeaturedPosts: () => dispatch(fetchFeaturedPosts()),
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
    this.props.fetchCategories();
    this.props.fetchFeaturedPosts();
  }

  render() {
    const featuredPosts = this.props.featuredPosts.toArray();
    const latestPosts = this.props.posts.exclude(this.props.featuredPosts).toArray();
    return (
      <div>
        <First
          array={featuredPosts}
          render={post => (
            <FeaturedPostExcerpt key={post.id} id={post.id} post={post} categories={this.props.categories}/>
          )}
        />
        <Slice
          start={1}
          end={4}
          array={featuredPosts}
          render={sliced => (
            <Map
              container={({ children }) => <RowLayout className="homepage-row-2">{children}</RowLayout>}
              array={sliced}
              render={post => <PostExcerpt key={post.id} id={post.id} post={post}/>}
            />
          )}
        />
        <Slice
          start={0}
          end={6}
          array={latestPosts}
          render={sliced => (
            <Map
              container={({ children }) => (
                <RowLayout className="homepage-row-2">
                  {children}
                </RowLayout>
              )}
              array={sliced}
              render={post => <PostExcerpt id={post.id} post={post}/>}
            />
          )}
        />
      </div>
    );
  }
}