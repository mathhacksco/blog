/* @flow */
import React, { Component } from 'react';

import Typography from './components/typography/Typography';

// $FlowFixMe
import './app.styles.scss';

type Props = {
  children?: ?Node;
};

type State = {};

type DefaultProps = {};

export default class App extends Component<DefaultProps, Props, State> {

  props: Props;
  static defaultProps: DefaultProps = {};
  state: State = {};

  render() {
    return (
      <div>
        <Typography/>
        {this.props.children}
      </div>
    );
  }
}
