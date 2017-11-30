/* @flow */
import type State from '../../models/State';
import type PostCollection from '../../models/PostCollection';

export function getPosts(state: State): PostCollection {
  return state.posts;
}