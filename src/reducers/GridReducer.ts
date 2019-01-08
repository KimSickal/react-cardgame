import {
	CellType,
	gridSize,
} from '../constants';

import {
	GridAction,
} from '../actions/types';

export interface GridState {
	grid: CellType[][];
}

const initialGridState: GridState = {
	grid: Array.from(Array(gridSize[0])).map(() => {
		return Array.from(Array(gridSize[1])).map(() => {
			return CellType.CELL_BLANK;
		});
	}),
};

export function grid(state = initialGridState, action: GridAction) {
	switch(action.type) {
		default:
			return state;
	}
}
