import React, { Component } from 'react';
import { fetchPost } from '../../actions/posts';
import { fetchTags } from '../../actions/tags';
import Post from '../post/Post';
import './PostPage.styles.scss';

class PostPage extends Component {

  state = {
    post: null,
    tags: [],
    isFetchingPost: false
  }

  componentDidMount() {
    this.setState({ isFetchingPost: true });
    const id = this.props.routeParams.id;
    fetchPost(id)
      .then(post => {
        this.setState({ post: post });
        return fetchTags(post.tags);
      })
      .then(tags => {
        this.setState({ tags: tags });
      })
      .finally(() => {
        this.setState({ isFetchingPost: false });
      });
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
          <Post post={this.state.post} tags={this.state.tags}/>
        </div>
    );
  }
}

export default PostPage;
