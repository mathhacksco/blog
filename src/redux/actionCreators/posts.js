/* @flow */
import * as actions from '../actions/posts';
import * as categoryActions from '../actions/categories';
import { POST_ACTION_TYPES } from '../constants';

import type { Dispatch, GetState } from '../../types/redux';
import type { Id } from '../../types/general';

export function handleException(error: Error): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch) => {
    // TODO log error in analytics
    throw error;
  };
}

export function fetchPosts(): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch, getState: GetState): Promise<void> => {
    try {
      dispatch({ type: POST_ACTION_TYPES.FETCH_POSTS });
      const posts = await actions.fetchPosts();
      dispatch({
        type: POST_ACTION_TYPES.RECEIVE_POSTS,
        payload: {
          posts
        }
      });
    }
    catch (error) {
      dispatch(handleException(error));
    }
  };
}

export function fetchPost(id: Id): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch, getState: GetState): Promise<void> => {
    try {
      dispatch({ type: POST_ACTION_TYPES.FETCH_POST });
      const post = await actions.fetchPost(id);
      dispatch({
        type: POST_ACTION_TYPES.RECEIVE_POST,
        payload: {
          post
        }
      });
    }
    catch (error) {
      dispatch(handleException(error));
    }
  };
}

export function fetchPostsByCategory(categoryId: Id): (dispatch: Dispatch, getState: GetState) => Promise<void> {
  return async (dispatch: Dispatch, getState: GetState): Promise<void> => {
    try {
      dispatch({ type: POST_ACTION_TYPES.FETCH_POSTS_BY_CATEGORY });
      const posts = await actions.fetchPosts({ categories: [categoryId] });
      dispatch({
        type: POST_ACTION_TYPES.RECEIVE_POSTS_BY_CATEGORY,
        payload: {
          categoryId,
          posts
        }
      });
    }
    catch (error) {
      dispatch(handleException(error));
    }
  };
}