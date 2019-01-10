import {
	HandKeys,
	drawCardAction,
	discardCardAction,
} from './types';

import {
	Card,
} from '../models';

export function drawCard(card: Card): drawCardAction {
	return {
		type: HandKeys.DRAW_CARD,
		card: card,
	};
}

export function discardCard(targetIndex: number): discardCardAction {
	return {
		type: HandKeys.DISCARD_CARD,
		targetIndex: targetIndex,
	};
}
