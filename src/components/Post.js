
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Post extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <h1>{this.props.post.title.rendered}</h1>
        <h2>{moment.utc(this.props.post.date_gmt).fromNow()}</h2>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }}/>
      </div>
    );
  }
}

export default Post;
