import * as React from 'react';

import {
	GridContainer,
} from './containers';

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

import './App.css';

export class App extends React.Component {

	public render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<div>
					<Provider
						store={createStore(reducers, applyMiddleware(thunk))}
					>
						<div className="App">
							<GridContainer/>
						</div>
					</Provider>
					<Provider
						store={createStore(reducers, applyMiddleware(thunk))}
					>
						<div className="App">
							<GridContainer/>
						</div>
					</Provider>
				</div>
				<div>
					<Provider
						store={createStore(reducers, applyMiddleware(thunk))}
					>
						<div className="App">
							<GridContainer/>
						</div>
					</Provider>
					<Provider
						store={createStore(reducers, applyMiddleware(thunk))}
					>
						<div className="App">
							<GridContainer/>
						</div>
					</Provider>
				</div>
			</div>
		);
	}
}
