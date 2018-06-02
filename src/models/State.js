/* @flow */
import { Model } from 'caldera-immutable-model';

import PostCollection from '../models/PostCollection';
import PageCollection from '../models/PageCollection';

import type Post from './Post';
import type Page from './Page';
import type { PostObject, PageObject } from '../types/wordpress';

type PostCollectionConvertible = PostObject[] | Post[] | PostCollection;
type PostConvertible = PostObject | Post;
type PageCollectionConvertible = PageObject[] | Page[] | PageCollection;
type PageConvertible = PageObject | Page;

export default class State extends Model {

  _posts: PostCollection;
  _pages: PageCollection;
  _featuredPosts: PostCollection;

  constructor(data: any) {
    super(data);
    this._posts = new PostCollection(this.get('posts'));
    this._pages = new PageCollection(this.get('pages'));
    this._featuredPosts = new PostCollection(this.get('featuredPosts'));
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

  get featuredPosts(): PostCollection {
    return this._featuredPosts;
  }

  setFeaturedPosts(posts: PostCollectionConvertible): State {
    return this.set('featuredPosts', posts);
  }

  get pages(): PageCollection {
    return this._pages;
  }

  setPages(pages: PageCollectionConvertible): State {
    return this.set('pages', pages);
  }

  addPage(page: PageConvertible): State {
    return this.set('pages', this.pages.addOrReplaceById(page.id, page));
  }
}
