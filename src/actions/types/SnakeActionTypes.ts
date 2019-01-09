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
	TOGGLE_GAME_OVER = 'TOGGLE_GAME_OVER',
	INCREMENT_SCORE = 'INCREMENT_SCORE',
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

export interface ToggleGameOverAction extends Action {
	type: SnakeKeys.TOGGLE_GAME_OVER;
}

export interface IncrementScoreAction extends Action {
	type: SnakeKeys.INCREMENT_SCORE;
}

export type SnakeAction = (
	| MoveHeadAction
	| PopTailsAction
	| PushTailsAction
	| ToggleGameOverAction
	| IncrementScoreAction
);
