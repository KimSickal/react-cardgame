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

import { styles } from './HandContainerStyle';

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
			<div
				style={styles.hand}
			>
				<p
					style={{
						backgroundColor: 'blue',
						...styles.hand_card,
					}}
					onClick={this.props.drawCardIfCould}
				>
					{'draw'}
				</p>
				{
					hand.map((e, i) => {
						return (
							<p
								style={styles.hand_card}
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
