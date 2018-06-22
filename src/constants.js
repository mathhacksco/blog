// @flow
export const FAVICON_DIRECTORY = '';

// $FlowFixMe
export const APP_VERSION = process.env.VERSION;
export const APP_ENVIRONMENT = process.env.NODE_ENV || 'development';

// NOTE: IOS 8601 is already moment's default format
export const MOMENT_DEFAULT_TIMESTAMP_FORMAT: ?string = null;
export const MOMENT_MONTH_FORMAT = 'MMMM';
export const MOMENT_DAY_FORMAT = 'M/D';
export const MOMENT_DAY_OF_WEEK_FORMAT = 'dd';

export const MOMENT_DAY_MONTH_CALENDAR_FORMAT = {
  sameDay: '[Today], MMM D',
  nextDay: '[Tomorrow], MMM D',
  lastDay: '[Yesterday], MMM D',
  lastWeek: 'dddd, MMM D',
  nextWeek: 'dddd, MMM D',
  sameElse: 'dddd, MMM D',
};

export const SEO_PAGE_TYPE = {
  ARTICLE: 'article',
  WEBPAGE: 'webpage',
};

// $FlowFixMe
export const GOOGLE_ADSENSE_PUBLISHER_ID: string =
  process.env.GOOGLE_ADSENSE_PUBLISHER_ID;

// $FlowFixMe
export const GOOGLE_ANALYTICS_TRACKING_ID: string =
  process.env.GOOGLE_ANALYTICS_TRACKING_ID;

export const ADS_ENABLED: boolean = !!JSON.parse(process.env.ADS_ENABLED || "false");