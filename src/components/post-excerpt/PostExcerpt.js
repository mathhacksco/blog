/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';

import type { Post } from '../../types';

type Props = {
  post: Post;
};

type DefaultProps = {};

type State = {};

export default class PostExcerpt extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

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
