import {
	SnakeAction,
	SnakeKeys,
} from '../actions/types';

import {
	position,
} from '../models';

export interface SnakeState {
	head: position;
	tails: position[];
}

const initialSnakeState: SnakeState = {
	head: {
		posX: 0,
		posY: 0,
	},
	tails: [],
};

export function snake(state = initialSnakeState, action: SnakeAction) {
	const {
		tails,
	} = state;

	switch(action.type) {
		case SnakeKeys.MOVE_HEAD:
			return {
				...state,
				head: action.targetPos,
			};
		case SnakeKeys.POP_TAILS:
			return {
				...state,
				tails: tails.slice(1),
			};
		case SnakeKeys.PUSH_TAILS:
			return {
				...state,
				tails: tails.concat(action.targetPos),
			};
		default:
			return state;
	}
}
