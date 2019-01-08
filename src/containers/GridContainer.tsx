import * as React from 'react';

import {
	connect,
} from 'react-redux';

import {
	State,
} from '../reducers';

import {
	getPosX,
	getPosY,
} from '../selectors';

interface ComponentProps {
	posX: number;
	posY: number;
}

class GridComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			posX,
			posY,
		} = this.props;

		return (
			<div
				style={{
					top: posY * 10,
					left: posX * 10,
				}}
			>
				{'asdf'}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		posX: getPosX(state),
		posY: getPosY(state),
	};
}

export const GridContainer = connect(mapStateToProps)(GridComponent);
