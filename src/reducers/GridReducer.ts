import {
	CellType,
	gridSize,
} from '../constants';

import {
	GridAction, GridKeys,
} from '../actions/types';

export interface GridState {
	grid: CellType[][];
}

const initialGridState: GridState = {
	grid: Array.from(Array(gridSize[0])).map((_1, i) => {
		return Array.from(Array(gridSize[1])).map((_2, j) => {
			if(i === 0 && j === 0) {
				return CellType.CELL_SNAKE_HEADER;
			}
			return CellType.CELL_BLANK;
		});
	}),
};

export function grid(state = initialGridState, action: GridAction) {
	switch(action.type) {
		case GridKeys.SET_CELL:
			const grid = state.grid;
			grid[action.position.posX][action.position.posY] = action.cellType;
			console.log(grid);
			return {
				grid: grid,
			};
		default:
			return state;
	}
}
