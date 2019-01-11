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
	getCardsOfHand,
} from '../selectors';

import {
	drawCardIfCould,
	discardCard,
} from '../actions';

import {
	State,
} from '../reducers';

interface ComponentProps {
	hand: ReturnType<typeof getCardsOfHand>;

	drawCardIfCould: typeof drawCardIfCould;
	discardCard: typeof discardCard;
}

class HandComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			hand,
		} = this.props;

		return (
			<div>
				<div
					style={{
						backgroundColor: 'blue',
					}}
					onClick={this.props.drawCardIfCould}
				>
					{'draw'}
				</div>
				{
					hand.map((e, i) => {
						return (
							<p
								key={i}
								onClick={() => this.props.discardCard(i)}
							>
								{`${e.name}`}
							</p>
						);
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		hand: getCardsOfHand(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		drawCardIfCould,
		discardCard,
	}, dispatch);
}

export const HandContainer = connect(mapStateToProps, mapDispatchToProps)(HandComponent);
