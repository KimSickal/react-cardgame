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
	Character,
	CellCode,
	addVectorToDirection,
	isPositionInBound,
} from '../models';

import {
	State,
} from '../reducers';

import {
	getField,
	getCharacters,
} from '../selectors';

function setCell(targetPosition: position, cellType: CellType): SetCellAction {
	return {
		type: FieldKeys.SET_CELL,
		targetPosition: targetPosition,
		cellType: cellType,
	};
}

function moveCharacter(targetPosition: position, characterIndex: number): MoveCharacterAction {
	return {
		type: FieldKeys.MOVE_CHARACTER,
		targetPosition: targetPosition,
		characterIndex: characterIndex,
	};
}

function couldMoveCharacter(state: State, targetPosition: position) {
	if(!isPositionInBound(targetPosition)) {
		return false;
	}
	if(getField(state)[targetPosition.posX][targetPosition.posY] !== CellCode.CELL_BLANK) {
		return false;
	}
	return true;
}

export function moveCharacterIfCould(direction: number, characterIndex: number) {
	return (dispatch: Dispatch<any>, getState: () => State) => {
		const state = getState();
		const targetCharacter = getCharacters(state)[0];
		if(targetCharacter === undefined) {
			return;
		}
		const targetPosition = addVectorToDirection(targetCharacter.position, direction, 1);
		if(couldMoveCharacter(state, targetPosition)) {
			dispatch(setCell(targetCharacter.position, CellCode.CELL_BLANK));
			dispatch(setCell(targetPosition, targetCharacter));
			dispatch(moveCharacter(targetPosition, characterIndex));
		}
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
