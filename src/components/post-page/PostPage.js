/* @flow */
import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import toNumber from 'lodash/toNumber';

import { fetchPost } from '../../redux/actionCreators/posts';
import { getPosts } from '../../redux/selectors/posts';
import Post from '../post/Post';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';

import type { Dispatch } from '../../types/redux';
import type { Id, RouteMatch } from '../../types/general';
import type AppState from '../../models/State';
import type PostCollection from '../../models/PostCollection';

// $FlowFixMe
import './PostPage.styles.scss';

type OwnProps = {
  match: RouteMatch,
};

type StateProps = {
  posts: PostCollection,
};

type DispatchProps = {
  fetchPost: Id => Promise<void>;
};

type Props = OwnProps & StateProps & DispatchProps;

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
class PostPage extends Component<Props, State> {

  props: Props;
  state = {};

  componentDidMount() {
    GoogleAnalytics.trackEvent({
      category: GoogleAnalytics.CategoryEnum.PostPage,
      action: GoogleAnalytics.ActionEnum.PageView,
      label: 'Post Page View'
    });
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
