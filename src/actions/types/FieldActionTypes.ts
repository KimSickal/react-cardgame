import {
	Action,
} from 'redux';

import {
	position,
	CellType,
} from '../../models';

export enum FieldKeys {
	SET_CELL = 'SET_CELL',
	MOVE_CHARACTER = 'MOVE_CHARACTER',
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

export type FieldAction = (
	| SetCellAction
	| MoveCharacterAction
);
