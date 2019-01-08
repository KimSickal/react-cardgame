import {
	KeyboardHanlderAction,
	KeyboardHandlerKeys,
} from '../actions/types';

import {
	CellType,
	gridSize,
} from '../constants';

import {
	position,
} from '../models';

export interface GridState {
	grid: CellType[][];
}

const initialGridState: GridState = {
	grid: Array.from(Array(gridSize[0])).map(() => {
		return Array.from(Array(gridSize[1])).map(() => {
			return CellType.CELL_BLANK;
		});
	}),
};

export interface KeyboardHandlerState {
	posX: number;
	posY: number;
}

const initialKeyboardHandlerState: KeyboardHandlerState = {
	posX: 0,
	posY: 0,
};

export interface SnakeState {
	head: position;
	tails: position[];
}

export function KeyboardHandler(state = initialKeyboardHandlerState, action: KeyboardHanlderAction) {
	const {
		posX,
		posY,
	} = state;

	switch(action.type) {
		case KeyboardHandlerKeys.MOVE_RIGHT:
			return {
				...state,
				posX: posX + 1,
			};
		case KeyboardHandlerKeys.MOVE_LEFT:
			return {
				...state,
				posX: posX - 1,
			};
		case KeyboardHandlerKeys.MOVE_DOWN:
			return {
				...state,
				posY: posY + 1,
			};
		case KeyboardHandlerKeys.MOVE_UP:
			return {
				...state,
				posY: posY - 1,
			};
		default:
			return state;
	}
}
