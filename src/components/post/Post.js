
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.styles.scss';

class Post extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    return (
      <div className="postContainer">
        <h1 className="postTitle">{this.props.post.title.rendered}</h1>
        {this.renderTags()}
        <div className="postContent" dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }}/>
      </div>
    );
  }

  renderTags() {
    return this.props.tags.map(tag => <div>{tag.name}</div>);
  }
}

export default Post;
