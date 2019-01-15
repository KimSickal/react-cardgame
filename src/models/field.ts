import {
	Character,
} from './character';

export const fieldSize = [10,10];

export enum direction {
	DIRECTION_UP = 0,
	DIRECTION_RIGHT,
	DIRECTION_DOWN,
	DIRECTION_LEFT,
}

export interface position {
	posX: number;
	posY: number;
}

export function addVectorToDirection(targetPosition: position, direction: direction, distance: number): position {
	const directionVector = [
		[0, -1],
		[1, 0],
		[0, 1],
		[-1, 0],
	][direction];
	return {
		posX: targetPosition.posX + directionVector[0] * distance,
		posY: targetPosition.posY + directionVector[1] * distance,
	} as position;
}

export enum CellCode {
	CELL_BLANK = 0,
}

export type CellType = (
	| CellCode
	| Character
);
