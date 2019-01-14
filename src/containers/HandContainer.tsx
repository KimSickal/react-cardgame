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
	styles,
} from './HandContainerStyle';

import {
	FieldDropAreaComponent,
} from '../components/FieldDropAreaComponent';

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
		const {
			hand,
			draggingTarget,
		} = this.props;

		return (
			<React.Fragment>
				<FieldDropAreaComponent
					{...this.props}
				/>
				<div
					style={styles.hand}
				>
					{
						draggingTarget === null ?
						<p
							style={{
								...styles.hand_card,
								backgroundColor: 'blue',
							}}
							onClick={this.props.drawCardIfCould}
						>
							{'draw'}
						</p>
						:
						<p
							style={{
								...styles.hand_card,
								backgroundColor: 'grey',
							}}
							onDragOver={(event: React.DragEvent) => {event.preventDefault();}}
							onDrop={() => this.props.dropCard(-1)}
						>
							{'discard'}
						</p>
					}
					{
						hand.map((e, i) => {
							return (
								<p
									style={styles.hand_card}
									key={i}
									draggable={true}
									onDragStart={() => this.props.dragCard(i)}
									onDragEnd={this.props.draggingCardEnd}
								>
									{`${e.name}`}
								</p>
							);
						})
					}
				</div>
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
