import React, { Component } from 'react';
import PostExcerpt from './PostExcerpt';
import Typography from 'typography';
import TypographyThemeMoraga from 'typography-theme-moraga';
import { TypographyStyle, GoogleFont } from 'react-typography'

// TODO create a provider for typography.js

const typography = new Typography(TypographyThemeMoraga);

export default class Home extends Component {

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
        <TypographyStyle typography={typography}>
          <GoogleFont typography={typography}/>
        </TypographyStyle>
        <div>
          {this.state.posts.map(post => {
            return (
              <div key={post.id}>
                <PostExcerpt post={post}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
