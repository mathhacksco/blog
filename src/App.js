/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

import Footer from './components/footer/Footer';
import store from './redux/store';

// $FlowFixMe
import './app.scss';

import type { Element } from 'react';
import type { Children } from './types/react';

type Props = {
  children?: ?Children,
};

export default function App({ children }: Props): Element<Provider> {
  return (
    <Provider store={store}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
          <link rel="canonical" href="http://mathhacks.co" />
          <title>Math Hacks</title>
          <style>{`
            html, body, main {
              margin: 0;
              width: 100%;
            }
            * {
              box-sizing: border-box;
            }
          `}</style>
        </Helmet>
        { /* $FlowFixMe */
          children
        }
        <Footer/>
      </div>
    </Provider>
  );
}