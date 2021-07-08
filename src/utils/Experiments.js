// @flow
import { BROWSER } from '../constants';
if (!BROWSER) {
  // eslint-disable-next-line no-undef
  global.window = {};
}

window.addEventListener('load', () => {});
