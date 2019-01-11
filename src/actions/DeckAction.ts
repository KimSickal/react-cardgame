import {
	DeckKeys,
	InitializeDeckAction,
	ShuffleDeckAction,
	PopDeckAction,
} from './types';

export function initializeDeck(): InitializeDeckAction {
	return {
		type: DeckKeys.INIT_DECK,
	};
}

export function shuffleDeck(): ShuffleDeckAction {
	return {
		type: DeckKeys.SHUFFLE_DECK,
	};
}

export function popDeck(): PopDeckAction {
	return {
		type: DeckKeys.POP_DECK,
	};
}
