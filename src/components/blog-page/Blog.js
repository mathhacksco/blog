/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Slice } from 'react-iterators';

import { fetchPosts } from '../../redux/actionCreators/posts';
import { getPosts } from '../../redux/selectors/posts';
import PostExcerpt from '../post-excerpt/PostExcerpt';
import RowLayout from '../layout/row-layout/RowLayout';
import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './Blog.styles.scss';

import type State from '../../models/State';
import type PostCollection from '../../models/PostCollection';
import type { Dispatch } from '../../types/redux';

type OwnProps = {
  children?: ?Node | ?Node[];
};

type StateProps = {
  posts: PostCollection;
};

type DispatchProps = {
  fetchPosts: () => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

type DefaultProps = {};

function mapStateToProps(state: State): StateProps {
  return {
    posts: getPosts(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
export default class Blog extends Component<DefaultProps, Props, {}> {

  props: Props;
  static defaultProps: DefaultProps = {};
  state = {}

  componentDidMount() {
    this.props.fetchPosts();
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
            render={post => <PostExcerpt key={post.id} id={post.id} post={post} className="post"/>}
          />
        )}
      />
    );
  }
}
