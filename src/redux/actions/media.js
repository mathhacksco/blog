/* @flow */
import pickBy from 'lodash/pickBy';

import { getRequest } from '../../utils/requests';

import type { MediaObject } from '../../types/wordpress';
import type { Id } from '../../types/general';

// $FlowFixMe
const WORDPRESS_API_URI: string = process.env.WORDPRESS_API_URI;
// $FlowFixMe
const WORDPRESS_API_PREFIX: string = process.env.WORDPRESS_API_PREFIX;

export const fetchMediaById = async (id: Id): MediaObject => {
  const query = pickBy({ rest_route: `${WORDPRESS_API_PREFIX}/media/${id}` });
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  const json = await res.json();
  // $FlowFixMe
  return json;
};

export const fetchMediaByIds = async (ids: Id[]): MediaObject => {
  const query = pickBy({ rest_route: `${WORDPRESS_API_PREFIX}/media`, id: ids });
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  const json = await res.json();
  // $FlowFixMe
  return json;
};
