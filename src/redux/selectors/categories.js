// @flow
import type State from '../../models/State';
import type CategoryCollection from '../../models/CategoryCollection';

export function getCategories(state: State): CategoryCollection {
  return state.categories;
}
