/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import { APP_VERSION, FAVICON_DIRECTORY } from '../../constants';
import * as GoogleAnalytics from '../../utils/GoogleAnalytics';

import 'assets/favicon/dist/apple-touch-icon-57x57.png';
import 'assets/favicon/dist/apple-touch-icon-60x60.png';
import 'assets/favicon/dist/apple-touch-icon-72x72.png';
import 'assets/favicon/dist/apple-touch-icon-76x76.png';
import 'assets/favicon/dist/apple-touch-icon-114x114.png';
import 'assets/favicon/dist/apple-touch-icon-120x120.png';
import 'assets/favicon/dist/apple-touch-icon-144x144.png';
import 'assets/favicon/dist/apple-touch-icon-152x152.png';
import 'assets/favicon/dist/apple-touch-icon-180x180.png';
import 'assets/favicon/dist/apple-touch-icon.png';
import 'assets/favicon/dist/favicon-16x16.png';
import 'assets/favicon/dist/favicon-32x32.png';

import 'assets/favicon/dist/mstile-70x70.png';
import 'assets/favicon/dist/mstile-144x144.png';
import 'assets/favicon/dist/mstile-150x150.png';
import 'assets/favicon/dist/mstile-310x150.png';
import 'assets/favicon/dist/mstile-310x310.png';

// $FlowFixMe - flow doesn't like .ico files for some reason
import 'assets/favicon/dist/favicon.ico';

// $FlowFixMe - flow doesn't like .xml files for some reason
import 'assets/favicon/dist/browserconfig.xml';

// $FlowFixMe
import 'assets/google-site-verification/google86c8c564b4df64aa.html';

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
      />
      <meta name="application-name" content="MathHacks" />
      {/* TODO: <meta name="description" content="" /> */}

      {/* TODO: add header color for chrome: <meta name="theme-color" content="#4285f4"> */}

      {/* Allow search engine indexing */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta name="google-site-verification" content="1ELExjSDfmvpRQ0nT8BHlmeMMJKiFFqj-UzYNu4qNpM" />
      <meta name="p:domain_verify" content="ad26da832d110e25d1b7750e14bd1719"/>

      {/* TODO:
      <meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center -->
      <meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console --> */}

      <meta name="rating" content="General" />
      <meta name="subject" content="education" />

      {/* TODO: <!-- Links to information about the author(s) of the document -->
      <link rel="author" href="http://mathhacks.co/humans.txt">

      <!-- TODO: Refers to a copyright statement that applies to the link's context -->
      <link rel="license" href="http://mathhacks.co/copyright"> */}

      {/* Open Graph - http://ogp.me/ */}
      {/* TODO: <meta property="fb:app_id" content="123456789"> */}
      <meta property="og:url" content="http://mathhacks.co" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="MathHacks" />
      {/* TODO: <meta property="og:image" content="http://mathhacks.co/image.jpg"> */}
      {/* TODO: <meta property="og:description" content="Description Here"> */}
      <meta property="og:site_name" content="MathHacks" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="Brett Berry" />

      {/* Facebook Instant Articles */}
      <meta property="op:markup_version" content="v1.0" />
      {/* TODO: <meta property="fb:article_style" content="myarticlestyle"> */}

      {/* TODO: twitter card tags - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@site_account" />
      <meta name="twitter:creator" content="@individual_account" />
      <meta name="twitter:url" content="http://example.com/page.html" />
      <meta name="twitter:title" content="Content Title" />
      <meta
        name="twitter:description"
        content="Content description less than 200 characters"
      />
      <meta name="twitter:image" content="http://example.com/image.jpg" />

      {/* Custom version tag for debug purposes */}
      <meta name="version" content={APP_VERSION} />

      {/* TODO: change canonical link if on an article page */}
      <link rel="canonical" href="http://mathhacks.co" />
      <title>MathHacks</title>

      {/* Google Analytics tracking script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${
          GoogleAnalytics.GOOGLE_ANALYTICS_PARAMS.TRACKING_ID
        }`}
      />
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${
          GoogleAnalytics.GOOGLE_ANALYTICS_PARAMS.TRACKING_ID
        }');
      `}
      </script>

      {/* Icon links */}
      <link
        rel="shortcut icon"
        href={`${FAVICON_DIRECTORY}/favicon.ico`}
        type="image/x-icon"
      />
      <link
        rel="icon"
        sizes="180x180"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        sizes="16x16"
        href={`${FAVICON_DIRECTORY}/favicon-16x16.png`}
      />
      <link
        rel="icon"
        sizes="32x32"
        href={`${FAVICON_DIRECTORY}/favicon-32x32.png`}
      />
      <link
        rel="apple-touch-icon"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-76x76.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_DIRECTORY}/apple-touch-icon-180x180.png`}
      />

      {/* TODO: <!-- Safari Pinned Tab Icon -->
      <link rel="mask-icon" href="/path/to/icon.svg" color="blue"> */}

      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>
  );
}
