/* @flow */
import { Model } from 'caldera-immutable-model';

import type { Id } from '../types/general';

export default class Category extends Model {
  get id(): Id { return this.get('id'); }
  get name(): string { return this.get('name'); }
  get slug(): string { return this.get('slug'); }
  get dateGMT(): string { return this.get('date_gmt'); }
  getId(): Id { return this.id; }
}