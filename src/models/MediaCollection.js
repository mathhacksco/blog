/* @flow */
import { Collection } from 'caldera-immutable-model';
import Media from './Media';

export default class MediaCollection extends Collection {
  static Model = Media;
}
