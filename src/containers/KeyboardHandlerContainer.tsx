import * as React from 'react';

import {
	AnyAction,
	Dispatch,
	bindActionCreators,
} from 'redux';

import {
	connect,
} from 'react-redux';

import {
	keydownMoveHeadIfNeeded,
	initializeGrid,
} from '../actions';

import {
	State,
} from '../reducers';

interface ComponentProps {
	keydownMoveHeadIfNeeded: typeof keydownMoveHeadIfNeeded;
	initializeGrid: typeof initializeGrid;
}

class KeyboardHandlerComponent extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	private onKeyDown(ev: KeyboardEvent) {
		this.props.keydownMoveHeadIfNeeded(ev.keyCode);
	}

	public componentDidMount() {
		window.addEventListener('keydown', this.onKeyDown);
	}

	public componentWillUnmount() {
		window.removeEventListener('keydown', this.onKeyDown);
	}

	public render() {
		return (
			<div/>
		);
	}
}

function mapStateToProps(state: State) {
	return {};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		keydownMoveHeadIfNeeded: keydownMoveHeadIfNeeded,
		initializeGrid: initializeGrid,
	}, dispatch);
}

export const KeyboardHandlerContainer = connect(mapStateToProps, mapDispatchToProps)(KeyboardHandlerComponent);
