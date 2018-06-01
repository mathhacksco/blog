/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

// $FlowFixMe
import './Navigation.styles.scss';

type Props = {};

export default function Navigation(props: Props) {
  return (
    <nav className="navigation">
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
