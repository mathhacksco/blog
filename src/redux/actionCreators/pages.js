/* @flow */
import * as actions from '../actions/pages';
import { PAGE_ACTION_TYPES } from '../constants';

import type { Dispatch, GetState } from '../../types/redux';

export function handleException(error: Error): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async () => {
    // TODO log error in analytics
    throw error;
  };
}

export function fetchPages(): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: PAGE_ACTION_TYPES.FETCH_PAGES });
      const pages = await actions.fetchPages();
      dispatch({
        type: PAGE_ACTION_TYPES.RECEIVE_PAGES,
        payload: {
          pages
        }
      });
    }
    catch (error) {
      dispatch(handleException(error));
    }
  };
}
