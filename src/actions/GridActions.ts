import {
	setCellAction,
	GridKeys,
	initializeGridAction,
	randomPutItemAction,
} from './types';

import {
	position,
} from '../models';

import {
	CellType,
} from '../constants';

export function setCell(position: position, cellType: CellType): setCellAction {
	return {
		type: GridKeys.SET_CELL,
		position: position,
		cellType: cellType,
	};
}

export function randomPutItem(): randomPutItemAction {
	return {
		type: GridKeys.RANDOM_PUT_ITEM,
	};
}

export function initializeGrid(head: position): initializeGridAction {
	return {
		type: GridKeys.INIT_GRID,
		head: head,
	};
}
