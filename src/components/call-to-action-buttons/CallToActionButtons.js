/* @flow */
import React from 'react';
import classnames from 'classnames';

import { SOCIAL_LINKS } from '../../constants';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import CallToActionBackgroundImage from 'assets/images/call-to-action/CallToActionBackground.png';

// $FlowFixMe
import './CallToActionButtons.scss';

type Props = {
  className?: ?string,
};

function openYoutube() {
  // TODO track this in google analytics
  window.open(SOCIAL_LINKS.YOUTUBE, '_blank');
}

export default function CallToActionButtons({ className }: Props) {
  return (
    <HorizontallyCentered
      container={({ children, className: containerClassName }) => (
        <section
          className={classnames(
            containerClassName,
            'call-to-action-button-container',
            className
          )}
          onClick={openYoutube}
        >
          {children}
        </section>
      )}
    >
      <ContentMaxWidth className="call-to-action-inner">
        <div className="call-to-action-button">
          <div className="background">
            <img src={CallToActionBackgroundImage} />
          </div>
          <div className="content">
            <a href={SOCIAL_LINKS.YOUTUBE}>
              <span className="call-to-action-text-secondary">
                MathHacks on Youtube
              </span>
              <h2 className="call-to-action-text-primary">
                <span>Watch Now</span>
              </h2>
            </a>
          </div>
        </div>
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}
