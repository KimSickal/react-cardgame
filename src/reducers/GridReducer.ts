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
	grid: [],
};

export function grid(state = initialGridState, action: GridAction) {
	switch(action.type) {
		case GridKeys.SET_CELL:
			const grid = state.grid;
			grid[action.position.posY][action.position.posX] = action.cellType;
			console.log(grid);
			return {
				grid: grid,
			};
		case GridKeys.INIT_GRID:
			const initGrid = Array.from(Array(gridSize[0])).map((_1, i) => {
				return Array.from(Array(gridSize[1])).map((_2, j) => {
					if(i === action.head.posY && j === action.head.posX) {
						return CellType.CELL_SNAKE_HEAD;
					}
					return CellType.CELL_BLANK;
				});
			});
			return {
				grid: initGrid,
			};
		default:
			return state;
	}
}
