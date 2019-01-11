import {
	Card,
} from '../models';

import {
	DeckAction,
	DeckKeys,
} from '../actions';

import {
	shuffle,
	newTrumpDeck,
} from '../helpers';

export interface DeckState {
	cards: Card[];
}

const initialDeckState: DeckState = {
	cards: [],
};

export function deck(state = initialDeckState, action: DeckAction) {
	const {
		cards,
	} = state;
	switch(action.type) {
		case DeckKeys.POP_DECK:
			return {
				...state,
				cards: cards.slice(1),
			};
		case DeckKeys.SHUFFLE_DECK:
			return {
				...state,
				cards: shuffle(cards),
			};
		case DeckKeys.INIT_DECK:
			return {
				...state,
				cards: newTrumpDeck,
			};
		default:
			return state;
	}
}
