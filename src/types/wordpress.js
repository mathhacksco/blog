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
  content: {
    rendered: string;
  };
  date_gmt: string;
};

export type PageObject = {
  id: Id;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date_gmt: string;
};

export type CategoryObject = {
  id: Id;
  slug: string;
  name: string;
  date_gmt: string;
};