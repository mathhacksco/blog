/* @flow */
import { Model } from 'caldera-immutable-model';
import reduce from 'lodash/reduce';
import isFunction from 'lodash/isFunction';

import PostCollection from '../models/PostCollection';
import PageCollection from '../models/PageCollection';
import CategoryCollection from '../models/CategoryCollection';

import type Post from './Post';
import type Page from './Page';
import type Category from './Category';
import type {
  CategoryObject,
  PostObject,
  PageObject,
} from '../types/wordpress';

type PostCollectionConvertible = PostObject[] | Post[] | PostCollection;
type PostConvertible = PostObject | Post;
type PageCollectionConvertible = PageObject[] | Page[] | PageCollection;
type PageConvertible = PageObject | Page;
type CategoryCollectionConvertible =
  | CategoryObject[]
  | Category[]
  | CategoryCollection;

export default class State extends Model {
  _posts: PostCollection;
  _pages: PageCollection;
  _categories: CategoryCollection;

  constructor(data: any) {
    super(data);
    this._posts = new PostCollection(this.get('posts'));
    this._pages = new PageCollection(this.get('pages'));
    this._categories = new CategoryCollection(this.get('categories'));
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

  addOrReplacePostsById(posts: PostCollectionConvertible): State {
    const data =
      // $FlowFixMe
      posts.toArray && isFunction(posts.toArray) ? posts.toArray() : posts;
    const updatedPosts = reduce(
      data,
      (acc, p) => acc.addOrReplaceById(p.id, p),
      this.posts
    );
    return this.setPosts(updatedPosts);
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

  get categories(): CategoryCollection {
    return this._categories;
  }

  setCategories(categories: CategoryCollectionConvertible): State {
    return this.set('categories', categories);
  }
}
