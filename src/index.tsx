import React from 'react';

import ReactDOM from 'react-dom';

import {
	createStore,
	applyMiddleware,
} from 'redux';

import {
	Provider,
} from 'react-redux';

import thunk from 'redux-thunk';

import './index.css';

import {
	reducers,
} from './reducers';

import {
	App,
} from './App';

ReactDOM.render(
	<Provider
		store={createStore(reducers, applyMiddleware(thunk))}
	>
		<App />
	</Provider>,
	document.getElementById('root'),
);
