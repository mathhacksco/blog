
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './Post.styles.scss';

class Post extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  static defaultProps = {
    tags: []
  }

  render() {
    return (
      <div className="postContainer">
        <h1 className="postTitle">
          {this.props.post.title.rendered}
        </h1>
        {this.renderTags()}
        <div
          className="postContent"
          dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }}
        />
      </div>
    );
  }

  renderTags() {
    return this.props.tags.map(tag => (
      <Link to={`/tags/${tag.id}`}>
        <div>{tag.name}</div>
      </Link>
    ));
  }
}

export default Post;
