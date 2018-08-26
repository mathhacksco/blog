/* @flow */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Logo from '../logo/Logo';
import { SOCIAL_LINKS } from '../../constants';

// $FlowFixMe
import './Navigation.styles.scss';

type Props = {
  className?: ?string,
  colorScheme?: 'violet' | 'teal' | 'pink',
};

export default function Navigation({ className, colorScheme }: Props) {
  return (
    <nav className={classnames('navigation', colorScheme || 'pink', className)}>
      <div className="navigation-top-bar" />
      <Link to="/tutorials" className="nav-link">
        Tutorials
      </Link>
      <a
        href={SOCIAL_LINKS.YOUTUBE}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>
      {/* <Link to="/blog" className="nav-link">
        Blog
      </Link> */}
      <Link to="/" className="nav-link nav-link-logo">
        <Logo />
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <a
        to={`mailto:${SOCIAL_LINKS.EMAIL}`}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      {/* <Link to="/" className="nav-link">
        Get Started
      </Link> */}
    </nav>
  );
}
