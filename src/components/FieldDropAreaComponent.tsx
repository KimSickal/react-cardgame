import * as React from 'react';

import {
	discardCard,
} from '../actions';

interface ComponentProps {
	discardCard: typeof discardCard;
}

export class FieldDropAreaComponent extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);
		this.onDrop = this.onDrop.bind(this);
	}

	private onDrop(event: React.DragEvent) {
		event.preventDefault();
		console.log(event.dataTransfer.getData('text'), event.target);
		this.props.discardCard(parseInt(event.dataTransfer.getData('text'), 10));
	}

	public render() {
		const dragAreaSize = 200;
		const points = [
			`0,0`,
			`${dragAreaSize},0`,
			`${dragAreaSize},${dragAreaSize}`,
			`0,${dragAreaSize}`,
			`0,0`,
		];
		const centerPoint = `${dragAreaSize/2},${dragAreaSize/2}`;

		return (
			<svg
				width={dragAreaSize}
				height={dragAreaSize}
			>
				{
					Array.from(Array(4)).map((_, i) => {
						return (
							<polygon
								points={`${points[i]} ${points[i+1]} ${centerPoint}`}
								style={{
									fill: 'grey',
								}}
								key={i}
								onDragOver={(event: React.DragEvent) => {event.preventDefault();}}
								onDrop={this.onDrop}
							/>
						);
					})
				}
			</svg>
		);
	}
}
