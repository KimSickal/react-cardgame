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

import {
	styles,
} from './HandContainerStyle';

import {
	FieldDropAreaComponent,
} from '../components/FieldDropAreaComponent';

interface ComponentProps {
	hand: ReturnType<typeof getCardsOfHand>;

	drawCardIfCould: typeof drawCardIfCould;
	discardCard: typeof discardCard;
}

class HandComponent extends React.Component<ComponentProps> {
	private onDragStart(event: React.DragEvent, cardIndex: number) {
		console.log(`drag started: ${cardIndex}`);
		if(event.dataTransfer === null) {
			return;
		}
		event.dataTransfer.setData('text', `${cardIndex}`);
	}

	public render() {
		const {
			hand,
		} = this.props;

		return (
			<React.Fragment>
				<FieldDropAreaComponent
					{...this.props}
				/>
				<div
					style={styles.hand}
				>
					<p
						style={{
							...styles.hand_card,
							backgroundColor: 'blue',
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
									draggable={true}
									onClick={() => this.props.discardCard(i)}
									onDragStart={(event: React.DragEvent) => this.onDragStart(event, i)}
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
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		drawCardIfCould,
		discardCard,
	}, dispatch);
}

export const HandContainer = connect(mapStateToProps, mapDispatchToProps)(HandComponent);
