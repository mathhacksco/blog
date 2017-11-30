/* @flow */
import { handleActions } from 'redux-actions';

import State from '../models/State';
import { POST_ACTION_TYPES } from './constants';

import type { Action } from '../types/redux';
import type {
  ReceivePostsPayload
} from '../types/actions';

const initialState = new State();
const actions = {
	[POST_ACTION_TYPES.RECEIVE_POSTS]: receivePosts
};

// eslint-disable-next-line object-curly-spacing
function receivePosts(state: State, { payload }: Action<ReceivePostsPayload>): State {
	if (!payload) {
		return state;
	}
	return state.setPosts(payload.posts);
}

export default handleActions(actions, initialState);
