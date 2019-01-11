import {
	createSelector,
} from 'reselect';

import {
	State,
} from '../reducers';

const getState = (state: State) => {
	return state.deck;
};

export const getCardsOfDeck = createSelector([
	getState,
], (state) => {
	return state.cards;
});
