/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Logo from '../logo/Logo';

// $FlowFixMe
import FooterMathSymbols from './FooterMathSymbols.svg';

// $FlowFixMe
import './Footer.scss';

type Props = {};

const COPYRIGHT_HOLDER = 'Brett Berry';
const COPYRIGHT_YEAR = moment().format('YYYY');

export default function Footer(props: Props) {
  return (
    <footer className="footer">
      <div className="math-symbols" dangerouslySetInnerHTML={{ __html: FooterMathSymbols }}/>
      <div className="copyright-container">
        <div className="logo-container">
          <Logo/>
        </div>
        <p className="copyright-text">
          <span>Copyright {COPYRIGHT_YEAR}, </span>
          <Link to="/about" className="author-link">{COPYRIGHT_HOLDER}</Link>
          <span>, All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
