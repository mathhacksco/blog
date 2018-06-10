// @flow
import _ from 'lodash';

import { postRequest } from './requests';
import * as Debug from './DebugUtil';
import * as Tracking from './Tracking';
import { APP_VERSION } from '../constants';

// $FlowFixMe
export const GOOGLE_ANALYTICS_TRACKING_ID: string =
  process.env.GOOGLE_ANALYTICS_TRACKING_ID;
export const GOOGLE_ANALYTICS_PARAMS = {
  HOST: 'https://www.google-analytics.com',
  API_VERSION: '1',
  TRACKING_ID: GOOGLE_ANALYTICS_TRACKING_ID,
};

const DEBUG = false;

export const CategoryEnum = {
  HomePage: 'Pages.HomePage',
  PostPage: 'Pages.PostPage',
  PostsPage: 'Pages.PostsPage',
};

export const ActionEnum = {
  PageView: 'PageView',
};

export type TrackingEvent = {
  category: string,
  action: string,
  label: ?string,

  // Optional fields
  value?: ?number,
};

export function getUserAgent(): string {
  return window.navigator.userAgent;
}

export const trackEvent = async (event: TrackingEvent) => {
  const query: { [key: string]: string | number } = _.omitBy(
    {
      v: GOOGLE_ANALYTICS_PARAMS.API_VERSION,
      tid: GOOGLE_ANALYTICS_PARAMS.TRACKING_ID,
      t: 'event',
      ec: event.category,
      ea: event.action,
      el: event.label,
      ev: event.value,
      ds: 'web',
      an: 'MathHacks',
      aid: 'com.jonbrennecke.mathhacksweb',
      ua: getUserAgent(),
      uid: Tracking.getBrowserFingerprint(),
      av: APP_VERSION,
      cd: event.category,
      cd1: window.location.hostname,
      cd2: APP_VERSION,
    },
    _.isNil
  );
  const res = await postRequest({
    url: `${GOOGLE_ANALYTICS_PARAMS.HOST}${DEBUG ? '/debug/' : '/'}collect`,
    query,
  });
  if (res.status === 200) {
    if (DEBUG) {
      const json = await res.json();
      Debug.log(JSON.stringify(json, null, 2));
    }
    Debug.log(`Successfully tracked event: ${event.label || ''}.`);
    return;
  }
  Debug.logErrorMessage(`Failed to track event. Error code ${res.status}.`);
  if (DEBUG) {
    const json = await res.json();
    Debug.log(JSON.stringify(json, null, 2));
  }
};
