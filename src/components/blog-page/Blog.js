/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice } from 'react-iterators';
import compact from 'lodash/compact';

import { fetchMediaByIds } from '../../redux/actionCreators/media';
import { getMedia } from '../../redux/selectors/media';
import { fetchPosts } from '../../redux/actionCreators/posts';
import { getPosts } from '../../redux/selectors/posts';
import { getCategories } from '../../redux/selectors/categories';
import { fetchCategories } from '../../redux/actionCreators/categories';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './Blog.styles.scss';

import type State from '../../models/State';
import type PostCollection from '../../models/PostCollection';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';
import type { Dispatch } from '../../types/redux';
import type { Id } from '../../types/general';

type OwnProps = {};

type StateProps = {
  posts: PostCollection,
  categories: CategoryCollection,
  media: MediaCollection,
};

type DispatchProps = {
  fetchPosts: () => Promise<void>,
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
    fetchCategories: () => dispatch(fetchCategories()),
    fetchMediaByIds: (ids: Id[]) => dispatch(fetchMediaByIds(ids)),
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Blog extends Component<Props, {}> {
  props: Props;

  async componentDidMount() {
    await this.props.fetchPosts();
    await this.props.fetchCategories();
    await this.fetchMedia();
  }

  async fetchMedia() {
    const mediaIds = this.props.posts.toArray().map(p => p.featuredMedia);
    const compactMediaIds = compact(mediaIds);
    await this.props.fetchMediaByIds(compactMediaIds);
  }

  render() {
    const posts = this.props.posts.toArray();
    return (
      <Slice
        start={0}
        end={8}
        array={posts}
        render={sliced => (
          <Map
            container={({ children }) => (
              <ColumnLayout>{children}</ColumnLayout>
            )}
            array={sliced}
            render={post => (
              <PostExcerpt
                key={post.id}
                id={post.id}
                post={post}
                className="post"
                categories={this.props.categories}
                media={this.props.media}
              />
            )}
          />
        )}
      />
    );
  }
}
