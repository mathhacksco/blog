/* @flow */
import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

import Logo from '../logo/Logo';
import InternalLink from '../base/internal-link/InternalLink';
import ExternalLink from '../base/external-link/ExternalLink';

// $FlowFixMe
import FooterMathSymbols from './FooterMathSymbols.svg';

// $FlowFixMe
import './Footer.scss';

import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  className?: ?string,
  tracking: TrackingContext,
  colorScheme: 'violet' | 'teal' | 'pink',
};

const COPYRIGHT_HOLDER = 'Brett Berry';
const COPYRIGHT_YEAR = moment().format('YYYY');

export default function Footer({ colorScheme, className, tracking }: Props) {
  return (
    <footer className={classnames('footer', colorScheme || 'pink', className)}>
      <div
        className="math-symbols"
        dangerouslySetInnerHTML={{ __html: FooterMathSymbols }}
      />
      <div className="footer-container">
        <div className="copyright-container">
          <div className="logo-container">
            <Logo />
          </div>
          <p className="copyright-text">
            <span>Copyright {COPYRIGHT_YEAR}, </span>
            <InternalLink
              path="/about"
              className="author-link"
              category={tracking.category}
              label="about page link"
            >
              {COPYRIGHT_HOLDER}
            </InternalLink>
            <span>, All Rights Reserved</span>
          </p>
        </div>
        <div className="footer-attribution-text">
          <span>
            MathHacks is open source on{' '}
            <ExternalLink
              href="https://github.com/mathhacksco/blog"
              category={tracking.category}
              label="mathhacks github"
            >
              Github
            </ExternalLink>
          </span>
          <span className="seperator">|</span>
          <span>
            Made with <em>❤</em> by{' '}
            <ExternalLink
              href="mailto:jpbrennecke@gmail.com"
              category={tracking.category}
              label="mailto jpbrennecke@gmail.com"
            >
              Jon Brennecke
            </ExternalLink>
          </span>
        </div>
      </div>
    </footer>
  );
}
