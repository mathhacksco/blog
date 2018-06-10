// @flow
import _ from 'lodash';

import { postRequest } from './requests';
import * as Debug from './DebugUtil';
import * as Tracking from './Tracking';

// $FlowFixMe
export const GOOGLE_ANALYTICS_TRACKING_ID: string = process.env.GOOGLE_ANALYTICS_TRACKING_ID;
export const GOOGLE_ANALYTICS_PARAMS = {
  HOST: 'https://www.google-analytics.com',
  API_VERSION: '1',
  TRACKING_ID: GOOGLE_ANALYTICS_TRACKING_ID
};

const DEBUG = false;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const CategoryEnum = {
  HomePage: 'Pages.HomePage',
  PostPage: 'Pages.PostPage',
  PostsPage: 'Pages.PostsPage'
};

export const ActionEnum = {
  PageView: 'PageView'
};

export type TrackingEvent = {
  category: string;
  action: string;
  label: ?string;

  // Optional fields
  value?: ?number;
};

export function getUserAgent(): string {
  return window.navigator.userAgent;
}

// TODO: gtag('set', {'user_id': 'USER_ID'}); // Set the user ID using signed-in user_id.

export const trackEvent = async (event: TrackingEvent) => {
  const query: { [key: string]: string | number } = _.omitBy({
    v: GOOGLE_ANALYTICS_PARAMS.API_VERSION,
    tid: GOOGLE_ANALYTICS_PARAMS.TRACKING_ID,
    t: 'event',
    ec: event.category,
    ea: event.action,
    el: event.label,
    ev: event.value,
    cd1: IS_PRODUCTION,
    ds: 'web',
    an: 'MathHacks',
    aid: 'com.jonbrennecke.mathhacksweb',
    ua: getUserAgent(),
    uid: Tracking.getBrowserFingerprint()

    // TODO: add more app information to every API request
    // an=funTimes                // App name.
    // &av=1.5.0                   // App version.
    // &aid=com.foo.App            // App Id.
    // &aiid=com.android.vending   // App Installer Id.
    // &cd=Home                    // Screen name / content description.

  }, _.isNil);
  const res = await postRequest({
    url: `${GOOGLE_ANALYTICS_PARAMS.HOST}${DEBUG ? '/debug/' : '/'}collect`,
    query
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

// TODO trackException
// TODO trackScreen (in the API this could be an EP group)