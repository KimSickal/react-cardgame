import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.grid;
};

export const getGrid = createSelector([
	getState,
], (state) => {
	return state.grid;
});

export const getItem = createSelector([
	getState,
], (state) => {
	return state.item;
});
