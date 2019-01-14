import * as React from 'react';

import {
	styles,
} from './HandCardsComponentStyle';
import {
	getCardsOfHand,
	getDraggingTarget,
} from '../selectors';

import {
	drawCardIfCould,
	draggingCardEnd,
	dragCard,
	dropCard,
} from '../actions';

interface ComponentProps {
	hand: ReturnType<typeof getCardsOfHand>;
	draggingTarget: ReturnType<typeof getDraggingTarget>;

	drawCardIfCould: typeof drawCardIfCould;
	draggingCardEnd: typeof draggingCardEnd;
	dragCard: typeof dragCard;
	dropCard: typeof dropCard;
}

export class HandCardsComponent extends React.Component<ComponentProps> {
	public render() {
		const {
			hand,
			draggingTarget,
		} = this.props;

		return (
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
		);
	}
}
