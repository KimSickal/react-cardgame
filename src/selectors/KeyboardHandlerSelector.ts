import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.KeyboardHandler;
};

export const getPosX = createSelector([
	getState,
], (state) => {
	return state.posX;
});

export const getPosY = createSelector([
	getState,
], (state) => {
	return state.posY;
});
