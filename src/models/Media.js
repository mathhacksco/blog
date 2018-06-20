/* @flow */
import { Model } from 'caldera-immutable-model';

import type { Id } from '../types/general';

export default class Media extends Model {
  get id(): Id {
    return this.get('id');
  }
  get date(): string {
    return this.get('date');
  }
  get dateGMT(): string {
    return this.get('date_gmt');
  }
  get slug(): string {
    return this.get('slug');
  }
  get fullSourceUrl(): string {
    // TODO: clean this up
    return this.get('media_details').sizes.full.source_url;
  }
  getId(): Id {
    return this.id;
  }
}
