/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import first from 'lodash/first';
import compact from 'lodash/compact';

import {
  fetchPosts,
  fetchPostsByCategory,
} from '../../redux/actionCreators/posts';
import { fetchMediaByIds } from '../../redux/actionCreators/media';
import { getMedia } from '../../redux/selectors/media';
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
import Footer from '../footer/Footer';
import { SEO_PAGE_TYPE } from '../../constants';
import Seo from '../seo/Seo';

// $FlowFixMe
import './Home.scss';

import type { Id } from '../../types/general';
import type State from '../../models/State';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { Dispatch } from '../../types/redux';

type OwnProps = {};

type StateProps = {
  posts: PostCollection,
  categories: CategoryCollection,
  media: MediaCollection,
};

type DispatchProps = {
  fetchPosts: () => Promise<void>,
  fetchPostsByCategory: Id => Promise<void>,
  fetchCategories: () => Promise<void>,
  fetchMediaByIds: (ids: Id[]) => Promise<void>,
};

type Props = OwnProps & StateProps & DispatchProps;

function mapStateToProps(state: State): StateProps {
  return {
    posts: getPosts(state),
    categories: getCategories(state),
    media: getMedia(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPostsByCategory: (id: Id) => dispatch(fetchPostsByCategory(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchMediaByIds: (ids: Id[]) => dispatch(fetchMediaByIds(ids)),
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component<Props, {}> {
  props: Props;
  state = {};

  async componentDidMount() {
    await GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.HomePage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Home Page View',
    });
    await this.props.fetchPosts();
    await this.fetchFeaturedPosts();
    await this.fetchMedia();
  }

  async fetchMedia() {
    const mediaIds = this.props.posts.toArray().map(p => p.featuredMedia);
    const compactMediaIds = compact(mediaIds);
    await this.props.fetchMediaByIds(compactMediaIds);
  }

  async fetchFeaturedPosts() {
    await this.props.fetchCategories();
    const featuredCategory = this.props.categories.find(
      c => c.slug === 'featured'
    );
    if (!featuredCategory) {
      await Debug.logErrorMessage('Failed to find featured category.');
      return;
    }
    await this.props.fetchPostsByCategory(featuredCategory.id);
  }

  getFeaturedPosts(): PostCollection {
    const featuredCategory = this.props.categories.find(
      c => c.slug === 'featured'
    );
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
      <div className="app-container homepage">
        <Seo
          pageType={SEO_PAGE_TYPE.WEBPAGE}
          title="MathHacks"
          description="MathHacks is the modern person's destination for math writing, videos and tutorials."
          url="http://mathhacks.co"
        />
        {featuredPost && (
          <Hero post={featuredPost} categories={this.props.categories} />
        )}
        <Hero post={featuredPost} categories={this.props.categories} media={this.props.media} />
        <HorizontallyCentered className="ad-container-1" container="section">
          <ContentMaxWidth>
            <Ad />
          </ContentMaxWidth>
        </HorizontallyCentered>
        <CallToActionButtons className="call-to-action-container" />
        <FeaturedPosts
          featuredPosts={featuredPosts}
          categories={this.props.categories}
        />
        <HorizontallyCentered className="ad-container-2" container="section">
          <ContentMaxWidth>
            <Ad />
          </ContentMaxWidth>
        </HorizontallyCentered>
        <LatestPosts
          className="latest-posts-container"
          posts={latestPosts}
          categories={this.props.categories}
          media={this.props.media}
        />
        <Footer colorScheme="pink" />
      </div>
    );
  }
}
