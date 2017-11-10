/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';

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
        <Link to="/">
          <div>wordpress test</div>
        </Link>
        {this.props.children}
      </div>
    );
  }
}
