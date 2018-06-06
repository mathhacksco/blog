/* @flow */
import React from 'react';

// $FlowFixMe
import './Logo.styles.scss';
// $FlowFixMe
import LogoSvg from './logo.svg';

type Props = {};

export default function Logo(props: Props) {
  return (
    <div className="logo-container">
      <div className="logo" dangerouslySetInnerHTML={{ __html: LogoSvg }}/>
    </div>
  );
}
