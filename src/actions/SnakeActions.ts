import {
	Dispatch,
	AnyAction,
} from 'redux';

import {
	SnakeKeys,
	PopTailsAction,
	PushTailsAction,
	MoveHeadAction,
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
	getGrid,
} from '../selectors';

import {
	randomPutItem,
	setCell,
} from '../actions';

import {
	CellType,
	gridSize,
} from '../constants';

function popTails(): PopTailsAction {
	return {
		type: SnakeKeys.POP_TAILS,
	};
}

function pushTails(targetPos: position): PushTailsAction {
	return {
		type: SnakeKeys.PUSH_TAILS,
		targetPos: targetPos,
	};
}

function moveHead(targetPos: position): MoveHeadAction {
	return {
		type: SnakeKeys.MOVE_HEAD,
		targetPos: targetPos,
	};
}

function couldMoveHead(keyCode: number, targetPos: position, state: State) {
	if(targetPos.posY < 0 || targetPos.posY >= gridSize[0]) {
		return false;
	}
	if(targetPos.posX < 0 || targetPos.posX >= gridSize[1]) {
		return false;
	}
	return keyCode >= 37 && keyCode <= 40;
}

function keydownMoveHead(prevPos: position, targetPos: position, endOfTail: position) {
	return (dispatch: Dispatch<AnyAction>) => {
		dispatch(setCell(targetPos, CellType.CELL_SNAKE_HEAD));
		dispatch(moveHead(targetPos));
		if(endOfTail === undefined) {
			dispatch(setCell(prevPos, CellType.CELL_BLANK));
		}
		else {
			dispatch(setCell(prevPos, CellType.CELL_SNAKE_BODY));
			dispatch(setCell(endOfTail, CellType.CELL_BLANK));

			dispatch(pushTails(prevPos));
			dispatch(popTails());
		}
	};
}

function keydownMoveAndStretch(prevPos: position, targetPos: position) {
	return (dispatch: Dispatch<AnyAction>) => {
		console.log('asdf');
		dispatch(setCell(prevPos, CellType.CELL_SNAKE_BODY));
		dispatch(setCell(targetPos, CellType.CELL_SNAKE_HEAD));

		dispatch(moveHead(targetPos));
		dispatch(pushTails(prevPos));

		dispatch(randomPutItem());
	};
}

export function keydownMoveHeadIfNeeded(keyCode: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();
		const prevPos = getPos(state);
		const targetPos = (() => {
			switch(keyCode) {
				case 37:
					return {
						posX: prevPos.posX - 1,
						posY: prevPos.posY,
					};
				case 38:
					return {
						posX: prevPos.posX,
						posY: prevPos.posY - 1,
					};
				case 39:
					return {
						posX: prevPos.posX + 1,
						posY: prevPos.posY,
					};
				case 40:
					return {
						posX: prevPos.posX,
						posY: prevPos.posY + 1,
					};
				default:
					return prevPos;
			}
		})();

		if(couldMoveHead(keyCode, targetPos, state)) {
			const targetCellType = getGrid(state)[targetPos.posY][targetPos.posX];
			if(targetCellType === CellType.CELL_BLANK) {
				const endOfTail = getTails(state)[0];
				dispatch(keydownMoveHead(prevPos, targetPos, endOfTail));
			}
			else if(targetCellType === CellType.CELL_SNAKE_ITEM) {
				dispatch(keydownMoveAndStretch(prevPos, targetPos));
			}
		}
	};
}
