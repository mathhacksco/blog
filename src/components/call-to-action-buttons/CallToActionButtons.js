/* @flow */
import React from 'react';
import classnames from 'classnames';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './CallToActionButtons.scss';

type Props = {
  className?: ?string,
};

export default function CallToActionButtons({ className }: Props) {
  return (
    <HorizontallyCentered
      className={classnames('call-to-action-button-container', className)}
      container="section"
    >
      <ContentMaxWidth className="call-to-action-inner">
        <div className="call-to-action-button">
          <div className="background" />
          <div className="content">
            <span className="call-to-action-text-secondary">MathHacks on Youtube</span>
            <h2 className="call-to-action-text-primary">Watch Now</h2>
          </div>
        </div>
        <div className="call-to-action-button">
          {/* TODO: follow in Instagram */}
          <div className="background" />
          <div className="content">
            <span className="call-to-action-text-secondary">{'Don\'t be left out'}</span>
            <h2 className="call-to-action-text-primary">Get the Study Guide</h2>
          </div>
        </div>
        <div className="call-to-action-button">
          <div className="background" />
          <div className="content">
            <span className="call-to-action-text-secondary">MathHacks on Youtube</span>
            <h2 className="call-to-action-text-primary">Subscribe Now</h2>
          </div>
        </div>
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}
