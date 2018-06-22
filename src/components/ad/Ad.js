/* @flow */
import React from 'react';
import { showAds } from '../../utils/AdUtil';

// $FlowFixMe
import './Ad.styles.scss';

export default function Ad() {
  return showAds() ? (
    <div className="ad">
      <h2>Ad</h2>
    </div>
  ) : null;
}
