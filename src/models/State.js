/* @flow */
import { Model } from 'caldera-immutable-model';

import PostCollection from '../models/PostCollection';

import type Post from './Post';
import type { PostObject } from '../types/wordpress';

type PostCollectionConvertible = PostObject[] | Post[] | PostCollection;
type PostConvertible = PostObject | Post;

export default class State extends Model {

  _posts: PostCollection;

  constructor(data: any) {
    super(data);
    this._posts = new PostCollection(this.get('posts'));
  }

  get posts(): PostCollection {
    return this._posts;
  }

  setPosts(posts: PostCollectionConvertible): State {
    return this.set('posts', posts);
  }

  addPost(post: PostConvertible): State {
    return this.set('posts', this._posts.push(post));
  }
}
