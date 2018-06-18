// @flow
/* global PROJECT_ROOT */
import register from 'ignore-styles';
import Helmet from 'react-helmet';
import { JSDOM } from 'jsdom';
register(['.scss']);

import React from 'react';
import { renderToString } from 'react-dom/server';
import Promise from 'bluebird';
import nodeFs from 'fs';
import path from 'path';
import Routes from './Routes';

// $FlowFixMe
import './index.scss';

const fs = Promise.promisifyAll(nodeFs);
// $FlowFixMe
const HTML_TEMPLATE_PATH = path.resolve(PROJECT_ROOT, 'public', 'index.html');

Promise.config({
  cancellation: true,
  warnings: {
    wForgottenReturn: false,
  },
});

const render = async () => {
  const reactBody = renderToString(<Routes isBrowser={false} />);
  const htmlTemplate = await fs.readFileAsync(HTML_TEMPLATE_PATH, 'utf8');
  const dom = new JSDOM(htmlTemplate);
  await renderBody(dom, reactBody);
  await renderHead(dom);
  await fs.writeFileAsync(HTML_TEMPLATE_PATH, dom.serialize(), 'utf8');
};

const renderBody = async (dom: JSDOM, body: string) => {
  const templateBody = dom.window.document.querySelector('body');
  templateBody.insertAdjacentHTML('afterbegin', body);
  return dom;
};

const renderHead = async (dom: JSDOM) => {
  const helmet = Helmet.renderStatic();
  const head = `
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>`;
  const templateHead = dom.window.document.querySelector('head');
  templateHead.insertAdjacentHTML('afterbegin', head);
  return dom;
};

(async (done: () => any) => {
  await render();
  done();
})(() => {
  // Noop
});
