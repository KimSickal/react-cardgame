import {
	Dispatch,
} from 'redux';

import {
	SetCellAction,
	FieldKeys,
	MoveCharacterAction,
	AppendCharacterAction,
} from './types';

import {
	position,
	CellType,
	Direction,
	Character,
	CellCode,
} from '../models';

import {
	State,
} from '../reducers';

import {
	getField,
} from '../selectors';

function setCell(targetPosition: position, cellType: CellType): SetCellAction {
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

function appendCharacter(targetCharacter: Character): AppendCharacterAction {
	return {
		type: FieldKeys.APPEND_CHARACTER,
		targetCharacter: targetCharacter,
	};
}

function couldAppendCharacter(state: State, targetCharacter: Character) {
	if(getField(state)[targetCharacter.position.posX][targetCharacter.position.posY] === CellCode.CELL_BLANK) {
		return true;
	}
	return false;
}

export function appendCharacterIfCould(targetCharacter: Character) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();
		if(couldAppendCharacter(state, targetCharacter)) {
			dispatch(appendCharacter(targetCharacter));
			dispatch(setCell(targetCharacter.position, targetCharacter));
		}
	};
}
