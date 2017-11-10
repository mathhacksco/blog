/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';

export default class PostExcerpt extends Component {

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <Link to={`posts/${this.props.post.id}`}>
          <h1>{this.props.post.title.rendered}</h1>
        </Link>
        <h2>{moment.utc(this.props.post.date_gmt).fromNow()}</h2>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}/>
      </div>
    );
  }
}
