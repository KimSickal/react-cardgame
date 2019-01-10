import {
	Action,
} from 'redux';

import {
	Card,
} from '../../models';

export enum HandKeys {
	DRAW_CARD = 'DRAW_CARD',
	DISCARD_CARD = 'DISCARD_CARD',
}

export interface drawCardAction extends Action {
	type: HandKeys.DRAW_CARD;
	card: Card;
}

export interface discardCardAction extends Action {
	type: HandKeys.DISCARD_CARD;
	targetIndex: number;
}

export type HandAction = (
	| drawCardAction
	| discardCardAction
);
