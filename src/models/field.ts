import {
	Character,
} from './character';

export const fieldSize = [10,10];

export enum Direction {
	DIRECTION_UP = 0,
	DIRECTION_RIGHT,
	DIRECTION_DOWN,
	DIRECTION_LEFT,
}

export interface position {
	posX: number;
	posY: number;
}

export enum CellCode {
	CELL_BLANK = 0,
}

export type CellType = (
	| CellCode
	| Character
);
