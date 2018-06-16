// @flow
import React from 'react';
import { render } from 'react-dom';
import Promise from 'bluebird';

import Routes from './Routes';
import * as Debug from './utils/DebugUtil';

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
  render(<Routes />, element);
}
