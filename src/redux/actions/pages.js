/* @flow */
import { getRequest } from '../../utils/requests';

import type { PageObject } from '../../types/wordpress';

// $FlowFixMe
const WORDPRESS_API_URI: string = process.env.WORDPRESS_API_URI;
const WORDPRESS_API_PREFIX: string = process.env.WORDPRESS_API_PREFIX;

export const fetchPages = async (): PageObject[] => {
  const query = { rest_route: `${WORDPRESS_API_PREFIX}/pages` };
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  const json = await res.json();
  // $FlowFixMe
  return json;
};
