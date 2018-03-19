/* @flow */
import React, { Component } from 'react';

// $FlowFixMe
import './Logo.styles.scss';
// $FlowFixMe
import LogoSvg from './logo.svg';

type Props = {};

type DefaultProps = {};

type State = {};

export default class Logo extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <div className="logo" dangerouslySetInnerHTML={{ __html: LogoSvg }}/>
    );
  }
}
