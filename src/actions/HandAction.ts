import {
	Dispatch,
} from 'redux';

import {
	HandKeys,
	DrawCardAction,
	DiscardCardAction,
	DraggingCardStartAction,
	DraggingCardEndAction,
} from './types';

import {
	Card,
} from '../models';

import {
	getCardsOfDeck,
	getDraggingTarget,
} from '../selectors';

import {
	State,
} from '../reducers';

import {
	popDeck,
	moveCharacterIfCould,
} from '../actions';

function drawCard(card: Card): DrawCardAction {
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

export function discardCard(targetIndex: number): DiscardCardAction {
	return {
		type: HandKeys.DISCARD_CARD,
		targetIndex: targetIndex,
	};
}

function draggingCardStart(targetIndex: number): DraggingCardStartAction {
	return {
		type: HandKeys.DRAGGING_CARD_START,
		targetIndex: targetIndex,
	};
}

export function draggingCardEnd(): DraggingCardEndAction {
	return {
		type: HandKeys.DRAGGING_CARD_END,
	};
}

export function dragCard(targetIndex: number) {
	return (dispatch: Dispatch<any>) => {
		dispatch(draggingCardStart(targetIndex));
	};
}

export function dropCard(direction: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const draggingTarget = getDraggingTarget(getState());
		if(draggingTarget === null) {
			return;
		}
		dispatch(moveCharacterIfCould(direction, draggingTarget));
		dispatch(discardCard(draggingTarget));
		dispatch(draggingCardEnd());
	};
}
