import React, { Component } from 'react';
import PostExcerpt from './PostExcerpt';

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch(`${process.env.WORDPRESS_API_URI}/posts`)
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  render() {
    return (
        <div>
          {this.state.posts.map(post => {
            return (
              <div key={post.id}>
                <PostExcerpt post={post}/>
              </div>
            );
          })}
        </div>
    );
  }
}

export default Home;
