import * as React from 'react';

import {
	Dispatch,
	AnyAction,
	bindActionCreators,
} from 'redux';

import {
	connect,
} from 'react-redux';

import {
	State,
} from '../reducers';

import {
	getPos,
	getTails,
	getItem,
} from '../selectors';

import {
	position,
} from '../models';

import {
	initializeGrid,
	randomPutItem,
} from '../actions';

interface ComponentProps {
	head: position;
	tails: position[];
	item: position;

	initializeGrid: typeof initializeGrid;
	randomPutItem: typeof randomPutItem;
}

class GridComponent extends React.Component<ComponentProps> {
	public componentDidMount() {
		const {
			head,
		} = this.props;
		this.props.initializeGrid(head);
		this.props.randomPutItem();
	}

	public render() {
		const {
			head,
			tails,
			item,
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
						background: 'black',
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
								background: 'grey',
								top: e.posY * 10,
								left: e.posX * 10,
							}}
							key={i}
						/>
					);
				})}
				<div
					style={{
						position: 'absolute',
						width: '10px',
						height: '10px',
						background: 'red',
						top: item.posY * 10,
						left: item.posX * 10,
					}}
				/>
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		head: getPos(state),
		tails: getTails(state),
		item: getItem(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		initializeGrid: initializeGrid,
		randomPutItem: randomPutItem,
	}, dispatch);
}
export const GridContainer = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
