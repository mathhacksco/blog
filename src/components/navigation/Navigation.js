/* @flow */
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Logo from '../logo/Logo';

// $FlowFixMe
import './Navigation.styles.scss';

type Props = {
  className?: ?string;
  colorScheme: 'violet' | 'teal' | 'pink';
};

export default function Navigation({ className, colorScheme }: Props) {
  return (
    <nav className={classnames('navigation', colorScheme || 'pink', className)}>
      <div className="navigation-top-bar"/>
      <Link to="/tutorials" className="nav-link">
        Tutorials
      </Link>
      <Link to="/youtube" className="nav-link">
        YouTube
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/" className="nav-link nav-link-logo">
        <Logo/>
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/" className="nav-link">
        Get Started
      </Link>
    </nav>
  );
}
