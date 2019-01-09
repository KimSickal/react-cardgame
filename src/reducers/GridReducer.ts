import {
	CellType,
	gridSize,
} from '../constants';

import {
	GridAction, GridKeys,
} from '../actions/types';

import {
	position,
} from '../models';

export interface GridState {
	grid: CellType[][];
	item: position;
}

const initialGridState: GridState = {
	grid: [],
	item: {
		posX: 0,
		posY: 0,
	},
};

export function grid(state = initialGridState, action: GridAction) {
	switch(action.type) {
		case GridKeys.SET_CELL:
			const grid = state.grid;
			grid[action.position.posY][action.position.posX] = action.cellType;
			return {
				...state,
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
				...state,
				grid: initGrid,
			};
		case GridKeys.RANDOM_PUT_ITEM:
			const newGrid = state.grid;
			let randomPosX = 0;
			let randomPosY = 0;
			while(true){
				randomPosY = Math.floor(Math.random() * gridSize[0]);
				randomPosX = Math.floor(Math.random() * gridSize[1]);
				if(newGrid[randomPosY][randomPosX] === CellType.CELL_BLANK){
					newGrid[randomPosY][randomPosX] = CellType.CELL_SNAKE_ITEM;
					break;
				}
			}
			console.log(newGrid);
			return {
				grid: newGrid,
				item: {
					posX: randomPosX,
					posY: randomPosY,
				},
			};
		default:
			return state;
	}
}
