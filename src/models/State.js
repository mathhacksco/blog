/* @flow */
import { Model } from 'caldera-immutable-model';

import PostCollection from '../models/PostCollection';
import PageCollection from '../models/PageCollection';
import CategoryCollection from '../models/CategoryCollection';

import type Post from './Post';
import type Page from './Page';
import type Category from './Category';
import type { CategoryObject, PostObject, PageObject } from '../types/wordpress';

type PostCollectionConvertible = PostObject[] | Post[] | PostCollection;
type PostConvertible = PostObject | Post;
type PageCollectionConvertible = PageObject[] | Page[] | PageCollection;
type PageConvertible = PageObject | Page;
type CategoryCollectionConvertible = CategoryObject[] | Category[] | CategoryCollection;

export default class State extends Model {

  _posts: PostCollection;
  _pages: PageCollection;
  _featuredPosts: PostCollection;
  _categories: CategoryCollection;

  constructor(data: any) {
    super(data);
    this._posts = new PostCollection(this.get('posts'));
    this._pages = new PageCollection(this.get('pages'));
    this._featuredPosts = new PostCollection(this.get('featuredPosts'));
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

  get categories(): CategoryCollection {
    return this._categories;
  }

  setCategories(categories: CategoryCollectionConvertible): State {
    return this.set('categories', categories);
  }
}
