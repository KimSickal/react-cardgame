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
	switch(action.type) {
		case KeyboardHandlerKeys.MOVE_RIGHT:
			return {
				...state,
				posX: state.posX + 1,
			};
		case KeyboardHandlerKeys.MOVE_RIGHT:
			return {
				...state,
				posX: state.posX - 1,
			};
		case KeyboardHandlerKeys.MOVE_RIGHT:
			return {
				...state,
				posX: state.posY + 1,
			};
		case KeyboardHandlerKeys.MOVE_RIGHT:
			return {
				...state,
				posX: state.posY - 1,
			};
		default:
			return state;
	}
}
