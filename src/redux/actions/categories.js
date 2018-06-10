/* @flow */
import pickBy from 'lodash/pickBy';

import { getRequest } from '../../utils/requests';

import type { CategoryObject } from '../../types/wordpress';

// $FlowFixMe
const WORDPRESS_API_URI: string = process.env.WORDPRESS_API_URI;
// $FlowFixMe
const WORDPRESS_API_PREFIX: string = process.env.WORDPRESS_API_PREFIX;

export const fetchCategories = async (): CategoryObject[] => {
  const query = pickBy({ rest_route: `${WORDPRESS_API_PREFIX}/categories` });
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  const json = await res.json();
  // $FlowFixMe
  return json;
};
