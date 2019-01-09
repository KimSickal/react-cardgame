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
	RANDOM_PUT_ITEM = 'RANDOM_PUT_ITEM',
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

export interface randomPutItemAction extends Action {
	type: GridKeys.RANDOM_PUT_ITEM;
}

export type GridAction = (
	| setCellAction
	| initializeGridAction
	| randomPutItemAction
);
