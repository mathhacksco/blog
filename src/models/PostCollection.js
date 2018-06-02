/* @flow */
import { Collection } from 'caldera-immutable-model';
import Post from './Post';

export default class PostCollection extends Collection {
  static Model = Post;

  exclude(posts: PostCollection): PostCollection {
    return this.remove(p => !!posts.findById(p.id));
  }
}
