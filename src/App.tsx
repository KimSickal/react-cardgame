import * as React from 'react';

import './App.css';
import { KeyboardHandlerContainer } from './containers/KeyboardHandlerContainer';

export class App extends React.Component {
	render() {
		return (
			<div className="App">
				<KeyboardHandlerContainer/>
			</div>
		);
	}
}
