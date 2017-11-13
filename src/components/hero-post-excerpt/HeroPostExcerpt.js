/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

// $FlowFixMe
import './HeroPostExcerpt.styles.scss';

import type { PostObject } from '../../types/wordpress';

type Props = {
  post: PostObject;
};

type DefaultProps = {};

type State = {};

export default class HeroPostExcerpt extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <div className="hero-post-excerpt">
        <MeasureContentRect
          render={rect => (
            <div style={{ height: rect.width }} className="image"/>
          )}
        />
        <Link to={`posts/${this.props.post.id}`} className="title-link">
          <h2>{this.props.post.title.rendered}</h2>
        </Link>
        <h5>{moment.utc(this.props.post.date_gmt).fromNow()}</h5>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}/>
      </div>
    );
  }
}

import { withContentRect } from 'react-measure';

// $FlowFixMe
@withContentRect('bound')
class MeasureContentRect extends Component {

  componentDidMount() {
    // start anim loop and check calculated styles
  }

  render() {
    return (
      <div ref={this.props.measureRef}>
        {this.props.render(this.props.contentRect.entry)}
      </div>
    );
  }
}