import {
	combineReducers,
} from 'redux';

import {
	KeyboardHandler,
	KeyboardHandlerState,
} from './KeyboardHandlerReducer';

export interface State {
	KeyboardHandler: KeyboardHandlerState;
}

export const reducers = combineReducers<State>({
	KeyboardHandler:KeyboardHandler,
});
