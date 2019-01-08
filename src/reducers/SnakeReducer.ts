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
	tails: [
		{
			posX: 2,
			posY: 0,
		},
		{
			posX: 1,
			posY: 0,
		},
	],
};

export function snake(state = initialSnakeState, action: SnakeAction) {
	const {
		tails,
		head,
	} = state;

	const {
		posX,
		posY,
	} = head;

	switch(action.type) {
		case SnakeKeys.MOVE_RIGHT:
			return {
				...state,
				head: {
					posX: posX + 1,
					posY: posY,
				},
			};
		case SnakeKeys.MOVE_LEFT:
			return {
				...state,
				head: {
					posX: posX - 1,
					posY: posY,
				},
			};
		case SnakeKeys.MOVE_DOWN:
			return {
				...state,
				head: {
					posX: posX,
					posY: posY + 1,
				},
			};
		case SnakeKeys.MOVE_UP:
			return {
				...state,
				head: {
					posX: posX,
					posY: posY - 1,
				},
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
