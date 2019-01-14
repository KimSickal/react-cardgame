import {
	Card,
} from '../models';

import {
	HandAction,
	HandKeys,
} from '../actions';


export interface HandState {
	cards: Card[];
	draggingTarget: number | null;
}

const initialHandState: HandState = {
	cards: [],
	draggingTarget: null,
};

export function hand(state = initialHandState, action: HandAction) {
	const {
		cards,
	} = state;
	switch(action.type) {
		case HandKeys.DRAW_CARD:
			return {
				...state,
				cards: cards.concat(action.card),
			};
		case HandKeys.DISCARD_CARD:
			return {
				...state,
				cards: cards.slice(0, action.targetIndex).concat(cards.slice(action.targetIndex + 1)),
			};
		case HandKeys.DRAGGING_CARD_START:
			return {
				...state,
				draggingTarget: action.targetIndex,
			};
		case HandKeys.DRAGGING_CARD_END:
			return {
				...state,
				draggingTarget: null,
			};
		default:
			return state;
	}
}
