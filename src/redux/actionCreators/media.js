/* @flow */
import * as actions from '../actions/media';
import { MEDIA_ACTION_TYPES } from '../constants';

import type { Dispatch, GetState } from '../../types/redux';
import type { Id } from '../../types/general';

export function handleException(
  error: Error
): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async () => {
    // TODO log error in analytics
    throw error;
  };
}

export function fetchMediaById(
  id: Id
): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch({ type: MEDIA_ACTION_TYPES.FETCH_MEDIA });
      const media = await actions.fetchMediaById(id);
      dispatch({
        type: MEDIA_ACTION_TYPES.RECEIVE_MEDIA,
        payload: {
          media,
        },
      });
    } catch (error) {
      dispatch(handleException(error));
    }
  };
}
