/* @flow */
import React, { Component } from 'react';

// $FlowFixMe
import './Header.styles.scss';
import Logo from './logo.svg';

type Props = {};

type DefaultProps = {};

type State = {};

export default class Header extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <header className="header">
        <div className="logo" dangerouslySetInnerHTML={{ __html: Logo }}/>
      </header>
    );
  }
}
