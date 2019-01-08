import {
	Dispatch,
	AnyAction,
} from 'redux';

import {
	SnakeKeys,
	MoveUpAction,
	MoveRightAction,
	MoveDownAction,
	MoveLeftAction,
	PopTailsAction,
	PushTailsAction,
} from './types';

import {
	State,
} from '../reducers';

import {
	position,
} from '../models';

import {
	getPos,
	getTails,
} from '../selectors';

import {
	setCell,
} from '../actions';

import {
	CellType,
} from '../constants';

function moveUp(): MoveUpAction {
	return {
		type: SnakeKeys.MOVE_UP,
	};
}

function moveRight(): MoveRightAction {
	return {
		type: SnakeKeys.MOVE_RIGHT,
	};
}

function moveDown(): MoveDownAction {
	return {
		type: SnakeKeys.MOVE_DOWN,
	};
}

function moveLeft(): MoveLeftAction {
	return {
		type: SnakeKeys.MOVE_LEFT,
	};
}

function popTails(): PopTailsAction {
	return {
		type: SnakeKeys.POP_TAILS,
	};
}

function pushTails(position: position): PushTailsAction {
	return {
		type: SnakeKeys.PUSH_TAILS,
		targetPos: position,
	};
}

function couldMoveHead(state: State) {
	return true;
}

function moveHead(keyCode: number, state: State) {
	return (dispatch: Dispatch<AnyAction>) => {
		const moveAction = (() => {
			switch(keyCode) {
				case 37:
					return moveLeft;
				case 38:
					return moveUp;
				case 39:
					return moveRight;
				case 40:
					return moveDown;
				default:
					return;
			}
		})();
		if(moveAction === undefined) {
			return;
		}
		const head = getPos(state);
		const firstChild = getTails(state)[0];
		dispatch(setCell(head, CellType.CELL_SNAKE_BODY));
		dispatch(pushTails(head));
		dispatch(setCell(firstChild, CellType.CELL_BLANK));
		dispatch(popTails());
		dispatch(moveAction());
		dispatch(setCell(getPos(state), CellType.CELL_SNAKE_HEADER));
	};
}

export function keydownMoveHead(keyCode: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();

		if(couldMoveHead(state)) {
			dispatch(moveHead(keyCode, state));
		}
	};
}
