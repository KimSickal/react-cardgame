import {
	combineReducers,
} from 'redux';

import {
	snake, SnakeState,
} from './SnakeReducer';

export interface State {
	snake: SnakeState;
}

export const reducers = combineReducers<State>({
	snake,
});
