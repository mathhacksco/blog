/* @flow */
import * as actions from '../actions/categories';
import { CATEGORY_ACTION_TYPES } from '../constants';

import type { Dispatch, GetState } from '../../types/redux';

export function handleException(error: Error): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async () => {
    // TODO log error in analytics
    throw error;
  };
}

export function fetchCategories(): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES });
      const categories = await actions.fetchCategories();
      dispatch({
        type: CATEGORY_ACTION_TYPES.RECEIVE_CATEGORIES,
        payload: {
          categories
        }
      });
    }
    catch (error) {
      dispatch(handleException(error));
    }
  };
}