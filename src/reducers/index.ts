import {
	combineReducers,
} from 'redux';

import {
	snake,
	SnakeState,
} from './SnakeReducer';

import {
	grid,
	GridState,
} from './GridReducer';

export interface State {
	snake: SnakeState;
	grid: GridState;
}

export const reducers = combineReducers<State>({
	snake,
	grid,
});
