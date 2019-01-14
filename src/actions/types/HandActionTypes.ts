import {
	Action,
} from 'redux';

import {
	Card,
} from '../../models';

export enum HandKeys {
	DRAW_CARD = 'DRAW_CARD',
	DISCARD_CARD = 'DISCARD_CARD',
	DRAGGING_CARD_START = 'DRAGGING_CARD_START',
	DRAGGING_CARD_END = 'DRAGGING_CARD_END',
}

export interface DrawCardAction extends Action {
	type: HandKeys.DRAW_CARD;
	card: Card;
}

export interface DiscardCardAction extends Action {
	type: HandKeys.DISCARD_CARD;
	targetIndex: number;
}

export interface DraggingCardStartAction extends Action {
	type: HandKeys.DRAGGING_CARD_START;
	targetIndex: number;
}

export interface DraggingCardEndAction extends Action {
	type: HandKeys.DRAGGING_CARD_END;
}

export type HandAction = (
	| DrawCardAction
	| DiscardCardAction
	| DraggingCardEndAction
	| DraggingCardStartAction
);
