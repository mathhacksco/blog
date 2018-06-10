/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import { APP_VERSION } from '../../constants';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
      {/* TODO: add description */}
      <meta name="description" content="" />
      <meta name="version" content={APP_VERSION} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      <link rel="canonical" href="http://mathhacks.co" />
      <title>Math Hacks</title>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalytics.GOOGLE_ANALYTICS_PARAMS.TRACKING_ID}`}></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GoogleAnalytics.GOOGLE_ANALYTICS_PARAMS.TRACKING_ID}');
      `}
      </script>
    </Helmet>
  );
}