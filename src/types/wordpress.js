/* @flow */
import type { Id } from './general';

export type PostObject = {
  id: Id;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date_gmt: string;
};