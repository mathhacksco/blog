/* @flow */
import React from 'react';
import classnames from 'classnames';

import Logo from '../logo/Logo';
import ExternalLink from '../base/external-link/ExternalLink';
import InternalLink from '../base/internal-link/InternalLink';
import { SOCIAL_LINKS } from '../../constants';

// $FlowFixMe
import './Navigation.styles.scss';

import type { TrackingContext } from '../../utils/GoogleAnalytics';

type Props = {
  className?: ?string,
  tracking: TrackingContext,
  colorScheme?: 'violet' | 'teal' | 'pink',
};

export default function Navigation({
  className,
  colorScheme,
  tracking,
}: Props) {
  return (
    <nav className={classnames('navigation', colorScheme || 'pink', className)}>
      <div className="navigation-top-bar" />
      <InternalLink
        path="/"
        className="nav-link"
        category={tracking.category}
        label="Navbar Tutorials Link"
      >
        Tutorials
      </InternalLink>
      <ExternalLink
        href={SOCIAL_LINKS.YOUTUBE}
        className="nav-link"
        label="Navbar YouTube Link"
        category={tracking.category}
      >
        YouTube
      </ExternalLink>
      <InternalLink
        path="/"
        className="nav-link nav-link-logo"
        category={tracking.category}
        label="Navbar Logo Link"
      >
        <Logo />
      </InternalLink>
      <InternalLink
        path="/"
        className="nav-link"
        category={tracking.category}
        label="Navbar About Link"
      >
        About
      </InternalLink>
      <ExternalLink
        href={`mailto:${SOCIAL_LINKS.EMAIL}`}
        className="nav-link"
        label="Navbar Contact Link"
        category={tracking.category}
      >
        Contact
      </ExternalLink>
    </nav>
  );
}
