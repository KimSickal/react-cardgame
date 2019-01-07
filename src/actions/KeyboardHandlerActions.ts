import {
	Dispatch,
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

export function keydownMoveCharacter(keyCode: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();

		if(couldMoveCharacter(state)) {
			if(keyCode === 37) {
				dispatch(moveLeft());
			}
			if(keyCode === 38) {
				dispatch(moveUp());
			}
			if(keyCode === 39) {
				dispatch(moveRight());
			}
			if(keyCode === 40) {
				dispatch(moveDown());
			}
		}
	};
}
