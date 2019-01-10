import {
	combineReducers,
} from 'redux';

import {
	HandState,
	hand,
} from './HandReducer';

export interface State {
	hand: HandState;
}

export const reducers = combineReducers<State>({
	hand,
});
