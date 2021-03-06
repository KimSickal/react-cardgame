import * as React from 'react';

import {
	createStore,
	applyMiddleware,
} from 'redux';

import {
	Provider,
} from 'react-redux';

import thunk from 'redux-thunk';

import {
	reducers,
} from './reducers';

import {
	DeckContainer,
	HandContainer,
	FieldContainer,
} from './containers';

import './App.css';

export class App extends React.Component {

	public render() {
		return (
			<Provider
				store={createStore(reducers, applyMiddleware(thunk))}
			>
				<div className="App">
					<DeckContainer />
					<HandContainer/>
					<FieldContainer/>
				</div>
			</Provider>
		);
	}
}
