import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.field;
};

export const getCharacters = createSelector([
	getState,
], (state) => {
	return state.characters;
});

export const getField = createSelector([
	getState,
], (state) => {
	return state.field;
});
