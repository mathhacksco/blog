/* @flow */
import type { PostObject, PageObject } from './wordpress';

export type ReceivePostsPayload = {
  posts: PostObject[];
};

export type ReceivePostPayload = {
  post: PostObject;
};

export type ReceivePagesPayload = {
  pages: PageObject[];
};
