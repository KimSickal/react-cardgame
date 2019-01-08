import { KeyboardHanlderAction, KeyboardHandlerKeys } from '../actions/types';

export interface KeyboardHandlerState {
	posX: number;
	posY: number;
}

const initialState: KeyboardHandlerState = {
	posX: 0,
	posY: 0,
};

export function KeyboardHandler(state = initialState, action: KeyboardHanlderAction) {
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
