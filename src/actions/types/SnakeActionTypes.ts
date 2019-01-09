import {
	Action,
} from 'redux';

import {
	position,
} from '../../models';

export enum SnakeKeys {
	MOVE_HEAD = 'MOVE_HEAD',
	POP_TAILS = 'POP_TAILS',
	PUSH_TAILS = 'PUSH_TAILS',
}

export interface MoveHeadAction extends Action {
	type: SnakeKeys.MOVE_HEAD;
	targetPos: position;
}

export interface PopTailsAction extends Action {
	type: SnakeKeys.POP_TAILS;
}

export interface PushTailsAction extends Action {
	type: SnakeKeys.PUSH_TAILS;
	targetPos: position;
}

export type SnakeAction = (
	| MoveHeadAction
	| PopTailsAction
	| PushTailsAction
);
