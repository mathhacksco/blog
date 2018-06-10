/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice } from 'react-iterators';

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
import type { Dispatch } from '../../types/redux';

type OwnProps = {};

type StateProps = {
  posts: PostCollection;
  categories: CategoryCollection;
};

type DispatchProps = {
  fetchPosts: () => Promise<void>;
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
    fetchCategories: () => dispatch(fetchCategories())
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Blog extends Component<Props, {}> {

  props: Props;

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
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
            container={({ children }) => <ColumnLayout>{children}</ColumnLayout>}
            array={sliced}
            render={post => <PostExcerpt key={post.id} id={post.id} post={post} className="post" categories={this.props.categories}/>}
          />
        )}
      />
    );
  }
}
