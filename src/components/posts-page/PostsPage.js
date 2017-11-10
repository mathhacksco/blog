/* @flow */
import React, { Component } from 'react';

type Props = {
  children?: ?Node;
};

type State = {};

type DefaultProps = {};

export default class PostsPage extends Component<DefaultProps, Props, State> {

  props: Props;
  static defaultProps: DefaultProps = {};
  state: State = {};

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
