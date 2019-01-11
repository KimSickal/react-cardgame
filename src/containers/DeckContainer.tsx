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
	getCardsOfDeck,
} from '../selectors';

import {
	State,
} from '../reducers';

import {
	initializeDeck,
	shuffleDeck,
} from '../actions';

interface ComponentProps {
	deck: ReturnType<typeof getCardsOfDeck>;

	initializeDeck: typeof initializeDeck;
	shuffleDeck: typeof shuffleDeck;
}

class DeckComponent extends React.Component<ComponentProps> {
	public componentDidMount() {
		this.props.initializeDeck();
		this.props.shuffleDeck();
	}

	public render() {
		const {
			deck,
		} = this.props;

		return (
			<div>
				{
					deck.map((e, i) => {
						return (
							<p
								key={i}
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
		deck: getCardsOfDeck(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		initializeDeck,
		shuffleDeck,
	}, dispatch);
}

export const DeckContainer = connect(mapStateToProps, mapDispatchToProps)(DeckComponent);
