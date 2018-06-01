
import React from 'react';
import { render } from 'react-dom';
import Promise from 'bluebird';
import Routes from './Routes';

Promise.config({
  cancellation: true,
  warnings: {
    wForgottenReturn: false
  }
});


render(<Routes/>, document.getElementById('react-main'));
