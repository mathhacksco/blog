// @flow
import type State from '../../models/State';
import type PageCollection from '../../models/PageCollection';

export function getPages(state: State): PageCollection {
  return state.pages;
}
