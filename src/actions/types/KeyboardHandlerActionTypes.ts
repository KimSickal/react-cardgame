import {
	Action,
} from 'redux';

import {
	position,
} from '../../models';

import {
	CellType,
} from '../../constants';

export enum KeyboardHandlerKeys {
	MOVE_UP = 'MOVE_UP',
	MOVE_RIGHT = 'MOVE_RIGHT',
	MOVE_LEFT = 'MOVE_LEFT',
	MOVE_DOWN = 'MOVE_DOWN',
}

export enum GridKeys {
	SET_CELL = 'SET_CELL',
}

export interface MoveUpAction extends Action {
	type: KeyboardHandlerKeys.MOVE_UP;
}

export interface MoveRightAction extends Action {
	type: KeyboardHandlerKeys.MOVE_RIGHT;
}

export interface MoveLeftAction extends Action {
	type: KeyboardHandlerKeys.MOVE_LEFT;
}

export interface MoveDownAction extends Action {
	type: KeyboardHandlerKeys.MOVE_DOWN;
}

export interface setCellAction extends Action {
	type: GridKeys.SET_CELL;
	position: position;
	cellType: CellType;
}

export type GridAction = (
	| setCellAction
);


export type KeyboardHanlderAction = (
	| MoveUpAction
	| MoveRightAction
	| MoveDownAction
	| MoveLeftAction
);
