import React, { Component } from 'react';
import Post from '../post/Post';
import './PostPage.styles.scss';

class PostPage extends Component {

  state = {
    post: null
  }

  componentDidMount() {
    const id = this.props.routeParams.id;
    fetch(`http://dockerhost/wp-json/wp/v2/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        this.setState({ post: post });
      });
  }

  render() {
    if (!this.state.post) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    return (
        <div className="postPage">
          <Post post={this.state.post}/>
        </div>
    );
  }
}

export default PostPage;
