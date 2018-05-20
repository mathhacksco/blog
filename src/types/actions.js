/* @flow */
import type { PostObject } from './wordpress';

export type ReceivePostsPayload = {
  posts: PostObject[];
};

export type ReceivePostPayload = {
  post: PostObject;
};
