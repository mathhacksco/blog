/* @flow */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Logo from '../logo/Logo';
import ExternalLink from '../base/external-link/ExternalLink';
import { SOCIAL_LINKS } from '../../constants';

// $FlowFixMe
import './Navigation.styles.scss';

import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  className?: ?string,
  tracking: TrackingContext,
  colorScheme?: 'violet' | 'teal' | 'pink',
};

export default function Navigation({ className, colorScheme }: Props) {
  return (
    <nav className={classnames('navigation', colorScheme || 'pink', className)}>
      <div className="navigation-top-bar" />
      <Link to="/" className="nav-link">
        Tutorials
      </Link>
      <ExternalLink
        href={SOCIAL_LINKS.YOUTUBE}
        className="nav-link"
        label="Navbar YouTube Link"
      >
        YouTube
      </ExternalLink>
      <Link to="/" className="nav-link nav-link-logo">
        <Logo />
      </Link>
      <Link to="/" className="nav-link">
        About
      </Link>
      <ExternalLink
        href={`mailto:${SOCIAL_LINKS.EMAIL}`}
        className="nav-link"
        label="Navbar Contact Link"
      >
        Contact
      </ExternalLink>
    </nav>
  );
}
