import {
	setCellAction,
	GridKeys,
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
