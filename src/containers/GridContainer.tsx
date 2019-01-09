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
	getGameStatus,
	getScore,
	getBlock,
} from '../selectors';

import {
	position,
} from '../models';

import {
	initializeGrid,
	randomPutItem,
} from '../actions';

import {
	gridSize,
	cellSize,
} from '../constants';

import {
	KeyboardHandlerContainer,
} from '../containers';

interface ComponentProps {
	head: position;
	tails: position[];
	item: position;
	block: position;
	isGameOver: boolean;
	score: number;

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
			block,
			isGameOver,
			score,
		} = this.props;

		return (
			<div
				style={{
					width: `${gridSize[1] * cellSize}px`,
					height: `${gridSize[0] * cellSize}px`,
					border: '2px solid grey',
				}}
			>
			{
				isGameOver ?
				<React.Fragment>
					<p>
						{'Game'}
					</p>
					<p>
						{'Set'}
					</p>
					<p>
						{`Score: ${score}`}
					</p>
				</React.Fragment>
				:
				<React.Fragment>
					<KeyboardHandlerContainer/>
					<div
						style={{
							position: 'absolute',
							width: `${cellSize}px`,
							height: `${cellSize}px`,
							background: 'black',
							top: head.posY * cellSize,
							left: head.posX * cellSize,
						}}
					/>
					{tails.map((e, i) => {
						return (
							<div
								style={{
									position: 'absolute',
									width: `${cellSize}px`,
									height: `${cellSize}px`,
									background: 'grey',
									top: e.posY * cellSize,
									left: e.posX * cellSize,
								}}
								key={i}
							/>
						);
					})}
					<div
						style={{
							position: 'absolute',
							width: `${cellSize}px`,
							height: `${cellSize}px`,
							background: 'green',
							top: item.posY * cellSize,
							left: item.posX * cellSize,
						}}
					/>
					<div
						style={{
							position: 'absolute',
							width: `${cellSize}px`,
							height: `${cellSize}px`,
							background: 'red',
							top: block.posY * cellSize,
							left: block.posX * cellSize,
							color: 'white',
							fontWeight: 'bold',
						}}
					>
						{'X'}
					</div>
				</React.Fragment>
			}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		head: getPos(state),
		tails: getTails(state),
		item: getItem(state),
		block: getBlock(state),
		isGameOver: getGameStatus(state),
		score: getScore(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		initializeGrid: initializeGrid,
		randomPutItem: randomPutItem,
	}, dispatch);
}
export const GridContainer = connect(mapStateToProps, mapDispatchToProps)(GridComponent);
