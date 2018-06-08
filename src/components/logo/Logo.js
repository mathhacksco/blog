/* @flow */
import React from 'react';

// $FlowFixMe
import './Logo.scss';
// $FlowFixMe
import LogoTextSvg from './logoText.svg';
// $FlowFixMe
import LogoIconSvg from './logoIcon.svg';

type Props = {};

export default function Logo(props: Props) {
  return (
    <div className="logo-container">
      <div className="logo logo-icon" dangerouslySetInnerHTML={{ __html: LogoIconSvg }}/>
      <div className="logo logo-text" dangerouslySetInnerHTML={{ __html: LogoTextSvg }}/>
    </div>
  );
}
