/* @flow */
import { Model } from 'caldera-immutable-model';

export default class Post extends Model {
  get author(): number { return this.get('author'); }
  get content(): { rendered: string; } { return this.get('content'); }
  get excerpt(): { rendered: string; } { return this.get('excerpt'); }
  get link(): string { return this.get('link'); }
  get title(): { rendered: string } { return this.get('title'); }
  get type(): string { return this.get('string'); }
  get date(): string { return this.get('date'); }
  get dateGMT(): string { return this.get('date_gmt'); }
}