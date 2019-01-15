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

import {
	FieldState,
	field,
} from './FieldReducer';

export interface State {
	hand: HandState;
	deck: DeckState;
	field: FieldState;
}

export const reducers = combineReducers<State>({
	hand,
	deck,
	field,
});
