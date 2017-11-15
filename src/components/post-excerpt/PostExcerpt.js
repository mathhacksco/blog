/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

// $FlowFixMe
import './PostExcerpt.styles.scss';

import type { PostObject } from '../../types/wordpress';

type Props = {
  post: PostObject;
};

type DefaultProps = {};

type State = {};

export default class PostExcerpt extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <div className="post-excerpt">
        <Link to={`posts/${this.props.post.id}`} className="title-link">
          <h2 dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}/>
        </Link>
        <h4>{moment.utc(this.props.post.date_gmt).fromNow()}</h4>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}/>
        <Link to={`posts/${this.props.post.id}`} className="title-link">
          <h4>Read the post</h4>
        </Link>
      </div>
    );
  }
}
