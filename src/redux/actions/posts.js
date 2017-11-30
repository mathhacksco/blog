/* @flow */
import { getRequest } from '../../utils/requests';

import type { Id } from '../../types/general';
import type { PostObject } from '../../types/wordpress';

// $FlowFixMe
const WORDPRESS_API_URI: string = process.env.WORDPRESS_API_URI;

export const fetchPosts = async (): PostObject[] => {
  const res = await getRequest({ url: `${WORDPRESS_API_URI}/posts` });
  const json = await res.json();
  // $FlowFixMe
  return json;
};

export const fetchPost = async (id: Id) => {
  const res = await getRequest({ url: `${WORDPRESS_API_URI}/posts/${id}` });
  return await res.json();
};

export const fetchPostsWithTag = async (tag: string) => {
  const res = await getRequest({ url: `${WORDPRESS_API_URI}/posts?tags=${tag}` });
  return await res.json();
};