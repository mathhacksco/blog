
import React, { Component } from 'react';
import moment from 'moment';
import './app.styles.scss';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch('http://dockerhost/wp-json/wp/v2/posts')
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
                <h1>{post.title.rendered}</h1>
                <h2>{moment.utc(post.date_gmt).fromNow()}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
              </div>
            );
          })}
        </div>
    );
  }
}

export default App;
