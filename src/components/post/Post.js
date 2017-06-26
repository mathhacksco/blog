
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Post.styles.scss';

class Post extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const date = moment.utc(this.props.post.date_gmt).format('dddd, MMMM Do YYYY');
    console.log(this.props.post);
    return (
      <div className="postContainer">
        <h1 className="postTitle">{this.props.post.title.rendered}</h1>
        {/* <h2 className="postDate">{date}</h2> */}
        <div className="postContent" dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }}/>
      </div>
    );
  }
}

export default Post;
