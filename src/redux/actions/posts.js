/* @flow */
import { getRequest } from '../../utils/requests';

import type { Id } from '../../types/general';
import type { PostObject } from '../../types/wordpress';

// $FlowFixMe
const WORDPRESS_API_URI: string = process.env.WORDPRESS_API_URI;
const WORDPRESS_API_PREFIX: string = process.env.WORDPRESS_API_PREFIX;

export const fetchPosts = async (): PostObject[] => {
  const query = { rest_route: `${WORDPRESS_API_PREFIX}/posts` };
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

export const fetchPostsWithTag = async (tag: string) => {
  const query = { rest_route: `${WORDPRESS_API_PREFIX}/posts?tags=${tag}` };
  const res = await getRequest({ url: WORDPRESS_API_URI });
  return await res.json();
};
