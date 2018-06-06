/* @flow */
import type { PostObject, PageObject, CategoryObject } from './wordpress';

export type ReceivePostsPayload = {
  posts: PostObject[];
};

export type ReceivePostPayload = {
  post: PostObject;
};

export type ReceivePagesPayload = {
  pages: PageObject[];
};

export type ReceiveCategoriesPayload = {
  categories: CategoryObject[];
};
