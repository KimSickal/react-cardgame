import {
	Dispatch, AnyAction,
} from 'redux';

import {
	KeyboardHandlerKeys,
	MoveUpAction,
	MoveRightAction,
	MoveDownAction,
	MoveLeftAction,
} from './types';

import {
	State,
} from '../reducers';

function moveUp(): MoveUpAction {
	return {
		type: KeyboardHandlerKeys.MOVE_UP,
	};
}

function moveRight(): MoveRightAction {
	return {
		type: KeyboardHandlerKeys.MOVE_RIGHT,
	};
}

function moveDown(): MoveDownAction {
	return {
		type: KeyboardHandlerKeys.MOVE_DOWN,
	};
}

function moveLeft(): MoveLeftAction {
	return {
		type:KeyboardHandlerKeys.MOVE_LEFT,
	};
}

function couldMoveCharacter(state: State) {
	return true;
}

function moveCharacter(keyCode: number) {
	return (dispatch: Dispatch<AnyAction>) => {
		switch(keyCode) {
			case 37:
				dispatch(moveLeft());
				return;
			case 38:
				dispatch(moveUp());
				return;
			case 39:
				dispatch(moveRight());
				return;
			case 40:
				dispatch(moveDown());
				return;
			default:
				return;
		}
	};
}

export function keydownMoveCharacter(keyCode: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();

		if(couldMoveCharacter(state)) {
			dispatch(moveCharacter(keyCode));
		}
	};
}
