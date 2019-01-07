import {
	Action,
} from 'redux';

export const moveEventPrefix = 'KEYDOWN';

export enum KeyboardHandlerKeys {
	MOVE_UP = 'MOVE_UP',
	MOVE_RIGHT = 'MOVE_RIGHT',
	MOVE_LEFT = 'MOVE_LEFT',
	MOVE_DOWN = 'MOVE_DOWN',
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

export type KeyboardHanlderAction = (
	| MoveUpAction
	| MoveRightAction
	| MoveDownAction
	| MoveLeftAction
);
