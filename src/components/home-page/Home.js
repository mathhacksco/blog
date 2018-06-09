/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import first from 'lodash/first';

import { fetchPosts, fetchPostsByCategory } from '../../redux/actionCreators/posts';
import { fetchCategories } from '../../redux/actionCreators/categories';
import { getPosts } from '../../redux/selectors/posts';
import { getCategories } from '../../redux/selectors/categories';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';
import * as Debug from '../../utils/DebugUtil';
import PostCollection from '../../models/PostCollection';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import Ad from '../ad/Ad.js';
import CallToActionButtons from '../call-to-action-buttons/CallToActionButtons';
import FeaturedPosts from '../featured-posts/FeaturedPosts';
import Hero from '../hero/Hero';
import LatestPosts from '../latest-posts/LatestPosts';

// $FlowFixMe
import './Home.scss';

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
    const latestPosts = this.props.posts.exclude(featuredPosts);
    const featuredPost = first(featuredPosts.toArray());
    return (
      <div className="homepage">
        {featuredPost && <Hero post={featuredPost} categories={this.props.categories}/>}
        <HorizontallyCentered className="ad-container-1">
          <ContentMaxWidth>
            <Ad/>
          </ContentMaxWidth>
        </HorizontallyCentered>
        <CallToActionButtons className="call-to-action-container"/>
        <FeaturedPosts featuredPosts={featuredPosts} categories={this.props.categories}/>
        <HorizontallyCentered className="ad-container-2">
          <ContentMaxWidth>
            <Ad/>
          </ContentMaxWidth>
        </HorizontallyCentered>
        <LatestPosts className="latest-posts-container" posts={latestPosts} categories={this.props.categories}/>
      </div>
    );
  }
}