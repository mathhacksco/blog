/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import MeasureContentRect from '../layout/measure-content-rect/MeasureContentRect';
import ColumnLayout from '../layout/column-layout/ColumnLayout';

// $FlowFixMe
import './Footer.styles.scss';

type Props = {};

type DefaultProps = {};

type State = {};

const COPYRIGHT_HOLDER = 'Brett Berry';
const COPYRIGHT_YEAR = moment().format('YYYY');

export default class Footer extends Component<DefaultProps, Props, State> {

  props: Props;
  state: State = {};
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <footer className="footer">
        <p>
          Copyright {COPYRIGHT_YEAR}, {COPYRIGHT_HOLDER}
        </p>
      </footer>
    );
  }
}
