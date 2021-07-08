/* @flow */
import * as actions from '../actions/medium';
import { MEDIUM_ACTION_TYPES } from '../constants';

import type { Dispatch, GetState } from '../../types/redux';

export function handleException(
  error: Error
): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async () => {
    // TODO log error in analytics
    throw error;
  };
}

export function fetchMediumPosts(): (
  dispatch: Dispatch,
  getState: GetState
) => Promise<void> {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: MEDIUM_ACTION_TYPES.FETCH_POSTS });
      const posts = await actions.fetchMediumPosts();
      dispatch({
        type: MEDIUM_ACTION_TYPES.RECEIVE_POSTS,
        payload: {
          posts,
        },
      });
    } catch (error) {
      dispatch(handleException(error));
    }
  };
}
