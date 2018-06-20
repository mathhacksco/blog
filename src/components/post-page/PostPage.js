/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { fetchPostBySlug } from '../../redux/actionCreators/posts';
import { fetchMediaById } from '../../redux/actionCreators/media';
import { getPosts } from '../../redux/selectors/posts';
import { getMedia } from '../../redux/selectors/media';
import { fetchCategories } from '../../redux/actionCreators/categories';
import { getCategories } from '../../redux/selectors/categories';
import PostContent from '../post-content/PostContent';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';
import Hero from '../hero/Hero';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import Ad from '../ad/Ad.js';
import Footer from '../footer/Footer';

import type { Dispatch } from '../../types/redux';
import type { Id } from '../../types/general';
import type AppState from '../../models/State';
import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';

// $FlowFixMe
import './PostPage.scss';

type OwnProps = {
  match: {
    params: {
      slug: string,
    },
  },
};

type StateProps = {
  posts: PostCollection,
  categories: CategoryCollection,
  media: MediaCollection,
};

type DispatchProps = {
  fetchPostBySlug: (slug: string) => Promise<void>,
  fetchCategories: () => Promise<void>,
  fetchMediaById: (id: Id) => Promise<void>,
};

type Props = OwnProps & StateProps & DispatchProps;

type State = {};

function mapStateToProps(state: AppState): StateProps {
  return {
    posts: getPosts(state),
    categories: getCategories(state),
    media: getMedia(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPostBySlug: (slug: string) => dispatch(fetchPostBySlug(slug)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchMediaById: (id: Id) => dispatch(fetchMediaById(id)),
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
@autobind
class PostPage extends Component<Props, State> {
  props: Props;
  state = {};

  async componentWillMount() {
    await GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.PostPage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Post Page View',
    });
    const slug = this.props.match.params.slug;
    await this.props.fetchPostBySlug(slug);
  }

  async fetchMedia() {
    const slug = this.props.match.params.slug;
    const post = this.props.posts.findBySlug(slug);
    if (post) {
      await this.props.fetchMediaById(post.featuredMedia);
    }
  }

  render() {
    const slug = this.props.match.params.slug;
    const post = this.props.posts.findBySlug(slug);
    return (
      <div className="post-page">
        <Hero
          post={post}
          categories={this.props.categories}
          colorScheme="violet"
          media={this.props.media}
        />
        <HorizontallyCentered className="ad-container-1">
          <ContentMaxWidth>
            <Ad />
            {post && <PostContent post={post} />}
            <Ad />
          </ContentMaxWidth>
        </HorizontallyCentered>
        <Footer colorScheme="violet" />
      </div>
    );
  }
}

export default PostPage;
