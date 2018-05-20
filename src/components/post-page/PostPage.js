/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import toNumber from 'lodash/toNumber';

import { fetchPost } from '../../redux/actionCreators/posts';
import { getPosts } from '../../redux/selectors/posts';
import Post from '../post/Post';

import type { State as AppState, Dispatch } from '../../types/redux';
import type { Id, RouteParams } from '../../types/general';
import type PostCollection from '../../models/PostCollection';

// $FlowFixMe
import './PostPage.styles.scss';

type OwnProps = {
  routeParams: RouteParams;
};

type StateProps = {
  posts: PostCollection,
};

type DispatchProps = {
  fetchPost: Id => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

type DefaultProps = {

};

type State = {

};

function mapStateToProps(state: AppState): StateProps {
  return {
    posts: getPosts(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchPost: (id: Id) => dispatch(fetchPost(id))
  };
}

// $FlowFixMe
@connect(mapStateToProps, mapDispatchToProps)
@autobind
class PostPage extends Component<DefaultProps, Props, State> {

  props: Props;
  state = {};
  static defaultProps: DefaultProps = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    if (this.state.isFetchingPost) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    const id = toNumber(this.props.match.params.id);
    const post = this.props.posts.findById(id);
    if (!post) {
      return null;
    }
    return <Post post={post} tags={[]}/>;
  }
}

export default PostPage;
