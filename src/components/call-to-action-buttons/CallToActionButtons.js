/* @flow */
import React from 'react';
import classnames from 'classnames';

import { SOCIAL_LINKS } from '../../constants';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';
import YoutubeBackgroundImage from 'assets/images/call-to-action/YoutubeBackground.png';
import InstagramBackgroundImage from 'assets/images/call-to-action/InstagramBackground.png';

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
          <div className="background">
            <img src={YoutubeBackgroundImage} />
          </div>
          <div className="content">
            <a href={SOCIAL_LINKS.YOUTUBE}>
              <span className="call-to-action-text-secondary">MathHacks on Youtube</span>
              <h2 className="call-to-action-text-primary"><span>Watch Now</span></h2>
            </a>
          </div>
        </div>
        <div className="call-to-action-button">
          <div className="background" />
          <div className="content">
            <a href={SOCIAL_LINKS.INSTAGRAM}>
              <span className="call-to-action-text-secondary">{'Don\'t be left out'}</span>
              <h2 className="call-to-action-text-primary"><span>Get the Study Guide</span></h2>
            </a>
          </div>
        </div>
        <div className="call-to-action-button">
          <div className="background">
            <img src={InstagramBackgroundImage} />
          </div>
          <div className="content">
            <a href={SOCIAL_LINKS.INSTAGRAM}>
              <span className="call-to-action-text-secondary">MathHacks on Instagram</span>
              <h2 className="call-to-action-text-primary"><span>Follow along</span></h2>
            </a>
          </div>
        </div>
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}
