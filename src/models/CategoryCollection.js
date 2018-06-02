/* @flow */
import { Collection } from 'caldera-immutable-model';
import Category from './Category';

export default class CategoryCollection extends Collection {
  static Model = Category;
}
