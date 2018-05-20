/* @flow */
import { Collection } from 'caldera-immutable-model';
import Page from './Page';

export default class PageCollection extends Collection {
  static Model = Page;

  findBySlug(slug: string): ?Page {
    return this.find(page => page.slug === slug);
  }
}
