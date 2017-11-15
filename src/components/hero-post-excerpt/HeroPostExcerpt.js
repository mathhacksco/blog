/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import MeasureContentRect from '../layout/measure-content-rect/MeasureContentRect';
import ColumnLayout from '../layout/column-layout/ColumnLayout';

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
          className="half"
          render={rect => (
            // $FlowFixMe
            <div style={{ height: rect.width * 0.75 }} className="image"/>
          )}
        />
        <ColumnLayout className="half">
          <Link to={`posts/${this.props.post.id}`} className="title-link">
            <h2>
              <span dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}/>
            </h2>
          </Link>
          <h5 className="timestamp">{moment.utc(this.props.post.date_gmt).fromNow()}</h5>
          <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}/>
          <Link to={`posts/${this.props.post.id}`} className="title-link">
            <h4>Read the post</h4>
          </Link>
        </ColumnLayout>
      </div>
    );
  }
}