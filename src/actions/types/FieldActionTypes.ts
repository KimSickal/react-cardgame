import {
	Action,
} from 'redux';

import {
	position,
	CellType,
	Character,
} from '../../models';

export enum FieldKeys {
	SET_CELL = 'SET_CELL',
	MOVE_CHARACTER = 'MOVE_CHARACTER',
	APPEND_CHARACTER = 'APPEND_CHARACTER',
}

export interface SetCellAction extends Action {
	type: FieldKeys.SET_CELL;
	targetPosition: position;
	cellType: CellType;
}

export interface MoveCharacterAction extends Action {
	type: FieldKeys.MOVE_CHARACTER;
	targetPosition: position;
	characterIndex: number;
}

export interface AppendCharacterAction extends Action {
	type: FieldKeys.APPEND_CHARACTER;
	targetCharacter: Character;
}

export type FieldAction = (
	| SetCellAction
	| MoveCharacterAction
	| AppendCharacterAction
);
