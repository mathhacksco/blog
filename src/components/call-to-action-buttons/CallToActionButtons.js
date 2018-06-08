/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './CallToActionButtons.scss';

type Props = {
  className?: ?string;
};

export default function CallToActionButtons({ className }: Props) {
  return (
    <HorizontallyCentered className={classnames('call-to-action-button-container', className)}>
      <ContentMaxWidth className="call-to-action-inner">
        <div className="call-to-action-button">
          <div className="background"/>
          <div className="content">
            <h2>Subscribe Now</h2>
          </div>
        </div>
        <div className="call-to-action-button">
          <div className="background"/>
          <div className="content">
            <h2>Subscribe Now</h2>
          </div>
        </div>
        <div className="call-to-action-button">
          <div className="background"/>
          <div className="content">
            <h2>Subscribe Now</h2>
          </div>
        </div>
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}