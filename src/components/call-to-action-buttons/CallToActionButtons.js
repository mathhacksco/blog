/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './CallToActionButtons.styles.scss';

type Props = {};

export default function CallToActionButtons(props: Props) {
  return (
    <HorizontallyCentered className="call-to-action-button-container">
      <ContentMaxWidth className="call-to-action-inner">
        <div className="call-to-action-button">
          <div className="background"/>
          <h2>Subscribe Now</h2>
        </div>
        <div className="call-to-action-button">
          <div className="background"/>
          <h2>Subscribe Now</h2>
        </div>
        <div className="call-to-action-button">
          <div className="background"/>
          <h2>Subscribe Now</h2>
        </div>
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}