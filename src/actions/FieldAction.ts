import {
	Dispatch,
} from 'redux';

import {
	SetCellAction,
	FieldKeys,
	MoveCharacterAction,
} from './types';

import {
	position,
	CellType,
	Direction,
} from '../models';

import {
	State,
} from '../reducers';

export function setCell(targetPosition: position, cellType: CellType): SetCellAction {
	return {
		type: FieldKeys.SET_CELL,
		targetPosition: targetPosition,
		cellType: cellType,
	};
}

export function moveCharacter(targetPosition: position, characterIndex: number): MoveCharacterAction {
	return {
		type: FieldKeys.MOVE_CHARACTER,
		targetPosition: targetPosition,
		characterIndex: characterIndex,
	};
}

export function moveCharacterIfCould(direction: Direction, characterIndex: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		console.log('asdf');
	};
}
