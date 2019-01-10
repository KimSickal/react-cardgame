export enum DeckKeys {
	INIT_DECK = 'INIT_DECK',
	SHUFFLE_DECK = 'SHUFFLE_DECK',
	POP_DECK = 'POP_DECK',
}

export interface InitializeDeckAction {
	type: DeckKeys.INIT_DECK;
}

export interface ShuffleDeckAction {
	type: DeckKeys.SHUFFLE_DECK;
}

export interface PopDeckAction {
	type: DeckKeys.POP_DECK;
}

export type DeckAction = (
	| InitializeDeckAction
	| ShuffleDeckAction
	| PopDeckAction
);
