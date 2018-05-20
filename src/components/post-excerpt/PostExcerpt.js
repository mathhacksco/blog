/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classnames from 'classnames';

// $FlowFixMe
import './PostExcerpt.styles.scss';

import type Post from '../../models/Post';

type Props = {
  post: Post;
  className: ?string;
};

type DefaultProps = {};

type State = {};

export default class PostExcerpt extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <div className={classnames('post-excerpt', this.props.className)}>
        <Link to={`posts/${this.props.post.id}`} className="title-link">
          <h2 dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}/>
        </Link>
        <p className="timestamp">{moment.utc(this.props.post.dateGMT).fromNow()}</p>
        <div className="excerpt" dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}/>
        <Link to={`posts/${this.props.post.id}`} className="more-link">
          <h5>Read the post</h5>
        </Link>
      </div>
    );
  }
}
