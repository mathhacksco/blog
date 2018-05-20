/* @flow */
import { Collection } from 'caldera-immutable-model';
import Post from './Post';

import type { Id } from '../types/general';

export default class PostCollection extends Collection {
  static Model = Post;

  // findById(id: Id): ?Post {
  //   return this.find(p => p.id === id);
  // }
}
