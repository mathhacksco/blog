// @flow
import React from 'react';
// $FlowFixMe
import { hydrate } from 'react-dom';
import Promise from 'bluebird';
import * as Debug from './utils/DebugUtil';

import Routes from './Routes';

// $FlowFixMe
import './index.scss';

Promise.config({
  cancellation: true,
  warnings: {
    wForgottenReturn: false,
  },
});

const element = document.getElementById('react-main');
if (!element) {
  Debug.logErrorMessage('Failed to find `#react-main` component.');
} else {
  hydrate(<Routes />, element);
}
