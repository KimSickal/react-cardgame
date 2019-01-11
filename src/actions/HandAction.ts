import {
	Dispatch,
} from 'redux';

import {
	HandKeys,
	drawCardAction,
	discardCardAction,
} from './types';

import {
	Card,
} from '../models';

import {
	getCardsOfDeck,
} from '../selectors';

import {
	State,
} from '../reducers';

import {
	popDeck,
} from '../actions';

function drawCard(card: Card): drawCardAction {
	return {
		type: HandKeys.DRAW_CARD,
		card: card,
	};
}

function couldDrawCard(state: State) {
	const deck = getCardsOfDeck(state);
	return deck.length > 0;
}

export function drawCardIfCould() {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();
		if(couldDrawCard(state)) {
			const topCard = getCardsOfDeck(state)[0];
			dispatch(drawCard(topCard));
			dispatch(popDeck());
		}
	};
}

export function discardCard(targetIndex: number): discardCardAction {
	return {
		type: HandKeys.DISCARD_CARD,
		targetIndex: targetIndex,
	};
}
