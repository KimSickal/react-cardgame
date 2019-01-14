import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.hand;
};

export const getCardsOfHand = createSelector([
	getState,
], (state) => {
	return state.cards;
});

export const getDraggingTarget = createSelector([
	getState,
], (state) => {
	return state.draggingTarget;
});
