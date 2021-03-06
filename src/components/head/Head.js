/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

import {
  APP_VERSION,
  APP_ENVIRONMENT,
  FAVICON_DIRECTORY,
  GOOGLE_ADSENSE_PUBLISHER_ID,
} from '../../constants';
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
import 'assets/facebook/og_image.png';

// $FlowFixMe - flow doesn't like .ico files for some reason
import 'assets/favicon/dist/favicon.ico';

// $FlowFixMe - flow doesn't like .xml files for some reason
import 'assets/favicon/dist/browserconfig.xml';

// $FlowFixMe
import 'assets/google-site-verification/google86c8c564b4df64aa.html';

type Props = {
  schema: string,
  title: string,
  description: string,
  url: string,
};

export default function Head({ schema, title, description, url }: Props) {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
        itemscope: undefined,
        itemtype: `http://schema.org/${schema}`,
      }}
    >
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
      />
      <meta name="application-name" content={title} />
      <meta name="description" content={description} />

      {/* Custom version tag for debug purposes */}
      <meta name="version" content={APP_VERSION} />
      <meta name="environment" content={APP_ENVIRONMENT} />

      {/* TODO: change canonical link if on an article page */}
      <link rel="canonical" href={url} />
      <title>MathHacks</title>

      {/* TODO: add header color for chrome: <meta name="theme-color" content="#4285f4"> */}

      {/* Allow search engine indexing */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      {/* Search engine verification tags */}
      <meta
        name="google-site-verification"
        content="1ELExjSDfmvpRQ0nT8BHlmeMMJKiFFqj-UzYNu4qNpM"
      />
      <meta name="p:domain_verify" content="ad26da832d110e25d1b7750e14bd1719" />
      <meta name="msvalidate.01" content="ABF5AE6D72B987F7E57C176A8520C683" />
      {/* TODO: <meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console --> */}

      <meta name="rating" content="General" />
      <meta name="subject" content="education" />

      {/* TODO: <!-- Links to information about the author(s) of the document -->
      <link rel="author" href="http://mathhacks.co/humans.txt">

      <!-- TODO: Refers to a copyright statement that applies to the link's context -->
      <link rel="license" href="http://mathhacks.co/copyright"> */}

      {/* Facebook Open Graph - http://ogp.me/ */}
      <meta property="fb:app_id" content="186638215372469" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={schema} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="http://mathhacks.co/og_image.png" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      {/* <meta property="article:author" content="Brett Berry" /> */}
      {/* TODO: article:published_time - datetime - When the article was first published.
      article:modified_time - datetime - When the article was last changed.
      article:expiration_time - datetime - When the article is out of date after.
      article:author - profile array - Writers of the article.
      article:section - string - A high-level section name. E.g. Technology
      article:tag - string array - Tag words associated with this article. */}

      {/* Facebook Instant Articles (TODO: use only on article page) */}
      {/* <meta property="op:markup_version" content="v1.0" /> */}
      {/* TODO: <meta property="fb:article_style" content="myarticlestyle"> */}

      {/* TODO: twitter card tags - https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@site_account" />
      <meta name="twitter:creator" content="@individual_account" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/image.jpg" />

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

      {/* <AdSense/> */}
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script>
        {`
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "${GOOGLE_ADSENSE_PUBLISHER_ID}",
          enable_page_level_ads: true
        });
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
