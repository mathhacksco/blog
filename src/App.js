/* @flow */
import React from 'react';
import { Provider } from 'react-redux';

import Footer from './components/footer/Footer';
import store from './redux/store';
import Head from './components/head/Head';

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
      <div className="app-container">
        <Head/>
        { /* $FlowFixMe */
          children
        }
        <Footer/>
      </div>
    </Provider>
  );
}