import {
	Action,
} from 'redux';

import {
	position,
} from '../../models';

import {
	CellType,
} from '../../constants';

export enum GridKeys {
	SET_CELL = 'SET_CELL',
}

export interface setCellAction extends Action {
	type: GridKeys.SET_CELL;
	position: position;
	cellType: CellType;
}

export type GridAction = (
	| setCellAction
);
