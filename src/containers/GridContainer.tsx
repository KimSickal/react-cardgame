import * as React from 'react';

import {
	connect,
} from 'react-redux';

import {
	State,
} from '../reducers';

import {
	getPos,
	getTails,
} from '../selectors';

import {
	position,
} from '../models';

interface ComponentProps {
	head: position;
	tails: position[];
}

class GridComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			head,
			tails,
		} = this.props;

		return (
			<div
				style={{
					width: '500px',
					height: '500px',
				}}
			>
				<div
					style={{
						position: 'absolute',
						width: '10px',
						height: '10px',
						background: 'grey',
						top: head.posY * 10,
						left: head.posX * 10,
					}}
				/>
				{tails.map((e, i) => {
					return (
						<div
							style={{
								position: 'absolute',
								width: '10px',
								height: '10px',
								background: 'black',
								top: e.posY * 10,
								left: e.posX * 10,
							}}
							key={i}
						/>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		head: getPos(state),
		tails: getTails(state),
	};
}

export const GridContainer = connect(mapStateToProps)(GridComponent);
