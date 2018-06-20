// @flow
import type State from '../../models/State';
import type MediaCollection from '../../models/MediaCollection';

export function getMedia(state: State): MediaCollection {
  return state.media;
}
