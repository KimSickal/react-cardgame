import {
	combineReducers,
} from 'redux';

import {
	HandState,
	hand,
} from './HandReducer';

import {
	DeckState,
	deck,
} from './DeckReducer';

export interface State {
	hand: HandState;
	deck: DeckState;
}

export const reducers = combineReducers<State>({
	hand,
	deck,
});
