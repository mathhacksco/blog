/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { fetchPost } from '../../redux/actionCreators/posts';
import Post from '../post/Post';

import type { State as AppState, Dispatch } from '../../types/redux';
import type { Id, RouteParams } from '../../types/general';

// $FlowFixMe
import './PostPage.styles.scss';

type OwnProps = {
  routeParams: RouteParams;
};

type StateProps = {

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
  return {};
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
    const id = this.props.routeParams.id;
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
    if (!this.state.post) {
      return null;
    }
    return (
        <div className="postPage">
          <Post post={this.state.post} tags={[]}/>
        </div>
    );
  }
}

export default PostPage;
