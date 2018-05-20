/* @flow */
import { Collection } from 'caldera-immutable-model';
import Post from './Post';

export default class PostCollection extends Collection {
  static Model = Post;
}
