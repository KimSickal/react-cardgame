import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.snake;
};

export const getPos = createSelector([
	getState,
], (state) => {
	return state.head;
});

export const getPosX = createSelector([
	getState,
], (state) => {
	return state.head.posX;
});

export const getPosY = createSelector([
	getState,
], (state) => {
	return state.head.posY;
});
