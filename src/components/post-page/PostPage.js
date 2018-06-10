/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { fetchPostBySlug } from '../../redux/actionCreators/posts';
import { getPosts } from '../../redux/selectors/posts';
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
import type AppState from '../../models/State';
import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';

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
};

type DispatchProps = {
  fetchPostBySlug: (slug: string) => Promise<void>,
  fetchCategories: () => Promise<void>,
};

type Props = OwnProps & StateProps & DispatchProps;

type State = {};

function mapStateToProps(state: AppState): StateProps {
  return {
    posts: getPosts(state),
    categories: getCategories(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPostBySlug: (slug: string) => dispatch(fetchPostBySlug(slug)),
    fetchCategories: () => dispatch(fetchCategories()),
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
@autobind
class PostPage extends Component<Props, State> {
  props: Props;
  state = {};

  componentDidMount() {
    GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.PostPage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Post Page View',
    });
    const slug = this.props.match.params.slug;
    this.props.fetchPostBySlug(slug);
  }

  render() {
    const slug = this.props.match.params.slug;
    const post = this.props.posts.findBySlug(slug);
    return (
      <div className="post-page">
        {/* TODO: Hero should handle loading state with no post */}
        {post && (
          <Hero
            post={post}
            categories={this.props.categories}
            colorScheme="violet"
          />
        )}
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
