// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
        <h1 className="postTitle" dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}/>
        <p className="timestamp">{moment.utc(this.props.post.dateGMT).fromNow()}</p>
        {this.renderTags()}
        <p className="postContent" dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }}/>
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
