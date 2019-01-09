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
	INIT_GRID = 'INIT_GRID',
}

export interface setCellAction extends Action {
	type: GridKeys.SET_CELL;
	position: position;
	cellType: CellType;
}

export interface initializeGridAction extends Action {
	type: GridKeys.INIT_GRID;
	head: position;
}

export type GridAction = (
	| setCellAction
	| initializeGridAction
);
