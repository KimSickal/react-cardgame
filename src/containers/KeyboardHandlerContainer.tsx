import * as React from 'react';

export class KeyboardHandlerContainer extends React.Component {
	constructor(props: {}) {
		super(props);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	private onKeyDown(ev: KeyboardEvent) {
		console.log(ev.keyCode);
	}

	public componentDidMount() {
		window.addEventListener('keydown', this.onKeyDown)
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
