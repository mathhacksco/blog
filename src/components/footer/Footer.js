/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
          <span>Copyright {COPYRIGHT_YEAR}, </span>
          <Link to="/about" className="author-link">{COPYRIGHT_HOLDER}</Link>
          <span>, All Rights Reserved</span>
        </p>
      </footer>
    );
  }
}
