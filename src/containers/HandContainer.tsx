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
	getCardsOfHand, getDraggingTarget,
} from '../selectors';

import {
	drawCardIfCould,
	discardCard,
	dragCard,
	dropCard,
	draggingCardEnd,
} from '../actions';

import {
	State,
} from '../reducers';

import {
	HandCardsComponent,
	FieldDropAreaComponent,
} from '../components';

interface ComponentProps {
	hand: ReturnType<typeof getCardsOfHand>;
	draggingTarget: ReturnType<typeof getDraggingTarget>;

	drawCardIfCould: typeof drawCardIfCould;
	discardCard: typeof discardCard;
	draggingCardEnd: typeof draggingCardEnd;
	dragCard: typeof dragCard;
	dropCard: typeof dropCard;
}

class HandComponent extends React.Component<ComponentProps> {
	public render() {
		return (
			<React.Fragment>
				<FieldDropAreaComponent
					{...this.props}
				/>
				<HandCardsComponent
					{...this.props}
				/>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		hand: getCardsOfHand(state),
		draggingTarget: getDraggingTarget(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		drawCardIfCould,
		discardCard,
		draggingCardEnd,
		dragCard,
		dropCard,
	}, dispatch);
}

export const HandContainer = connect(mapStateToProps, mapDispatchToProps)(HandComponent);
