/* @flow */
import { handleActions } from 'redux-actions';

import State from '../models/State';
import { POST_ACTION_TYPES } from './constants';

import type { Action } from '../types/redux';
import type {
  ReceivePostsPayload,
  ReceivePostPayload
} from '../types/actions';

const initialState = new State();
const actions = {
	[POST_ACTION_TYPES.RECEIVE_POSTS]: receivePosts,
  [POST_ACTION_TYPES.RECEIVE_POST]: receivePost
};

// eslint-disable-next-line object-curly-spacing
function receivePosts(state: State, { payload }: Action<ReceivePostsPayload>): State {
	if (!payload) {
		return state;
	}
	return state.setPosts(payload.posts);
}

// eslint-disable-next-line object-curly-spacing
function receivePost(state: State, { payload }: Action<ReceivePostPayload>): State {
	if (!payload) {
		return state;
	}
	return state.addPost(payload.post);
}

export default handleActions(actions, initialState);
