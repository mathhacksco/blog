/* @flow */
import React, { Component } from 'react';
import { withContentRect } from 'react-measure';
import noop from 'lodash/noop';

type ContentRectEntry = {
  width: number;
  height: number;
};

type ContentRect = {
  entry: ContentRectEntry;
};

type Props = {
  measureRef?: ?(() => void);
  contentRect: ContentRect;
  render: ContentRectEntry => ?Element<*>;
};

type DefaultProps = { contentRect: ContentRect; };
type State = {};

// $FlowFixMe
@withContentRect('bound')
export default class MeasureContentRect extends Component<DefaultProps, Props, State> {
  props: Props;
  state: State;
  static defaultProps: DefaultProps = {
    measureRef: noop,
    contentRect: { entry: { width: 0, height: 0 } }
  };

  render() {
    return (
      <div ref={this.props.measureRef}>
        {this.props.render(this.props.contentRect.entry)}
      </div>
    );
  }
}