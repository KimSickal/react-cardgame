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
	isGameOver: boolean;
	score: number;
}

const initialSnakeState: SnakeState = {
	head: {
		posX: 0,
		posY: 0,
	},
	tails: [],
	isGameOver: false,
	score: 0,
};

export function snake(state = initialSnakeState, action: SnakeAction) {
	const {
		tails,
		score,
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
		case SnakeKeys.TOGGLE_GAME_OVER:
			return {
				...state,
				isGameOver: true,
			};
		case SnakeKeys.INCREMENT_SCORE:
			return {
				...state,
				score: score + 1,
			};
		default:
			return state;
	}
}
