import {
	Action,
} from 'redux';

import {
	position,
} from '../../models';

export enum SnakeKeys {
	MOVE_UP = 'MOVE_UP',
	MOVE_RIGHT = 'MOVE_RIGHT',
	MOVE_LEFT = 'MOVE_LEFT',
	MOVE_DOWN = 'MOVE_DOWN',
	POP_TAILS = 'POP_TAILS',
	PUSH_TAILS = 'PUSH_TAILS',
}

export interface MoveUpAction extends Action {
	type: SnakeKeys.MOVE_UP;
}

export interface MoveRightAction extends Action {
	type: SnakeKeys.MOVE_RIGHT;
}

export interface MoveLeftAction extends Action {
	type: SnakeKeys.MOVE_LEFT;
}

export interface MoveDownAction extends Action {
	type: SnakeKeys.MOVE_DOWN;
}

export interface PopTailsAction extends Action {
	type: SnakeKeys.POP_TAILS;
}

export interface PushTailsAction extends Action {
	type: SnakeKeys.PUSH_TAILS;
	targetPos: position;
}

export type SnakeAction = (
	| MoveUpAction
	| MoveRightAction
	| MoveDownAction
	| MoveLeftAction
	| PopTailsAction
	| PushTailsAction
);
