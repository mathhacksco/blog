/* @flow */
import pickBy from 'lodash/pickBy';

import { getRequest } from '../../utils/requests';

import type { Id } from '../../types/general';
import type { PostObject } from '../../types/wordpress';

type FetchPostParams = {
  categories?: number[],
};

// $FlowFixMe
const WORDPRESS_API_URI: string = process.env.WORDPRESS_API_URI;
// $FlowFixMe
const WORDPRESS_API_PREFIX: string = process.env.WORDPRESS_API_PREFIX;

export const fetchPosts = async ({
  categories,
}: FetchPostParams = {}): PostObject[] => {
  const query = pickBy({
    rest_route: `${WORDPRESS_API_PREFIX}/posts`,
    categories,
  });
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  const json = await res.json();
  // $FlowFixMe
  return json;
};

export const fetchPost = async (id: Id) => {
  const query = { rest_route: `${WORDPRESS_API_PREFIX}/posts/${id}` };
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  return await res.json();
};

export const fetchPostsBySlug = async (slug: string) => {
  const query = { rest_route: `${WORDPRESS_API_PREFIX}/posts`, slug };
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  return await res.json();
};

// TODO: combine with the fetchPosts function
export const fetchPostsWithTag = async (tag: string) => {
  const query = pickBy({
    rest_route: `${WORDPRESS_API_PREFIX}/posts`,
    tags: tag,
  });
  const res = await getRequest({ url: WORDPRESS_API_URI, query });
  return await res.json();
};
