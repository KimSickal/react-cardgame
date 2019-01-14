import * as React from 'react';

import {
	dropCard,
} from '../actions';

interface ComponentProps {
	dropCard: typeof dropCard;
}

export class FieldDropAreaComponent extends React.Component<ComponentProps> {
	constructor(props: ComponentProps) {
		super(props);
		this.onDrop = this.onDrop.bind(this);
	}

	private onDrop(direction: number) {
		this.props.dropCard(direction);
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
								onDrop={() => this.onDrop(i)}
							/>
						);
					})
				}
			</svg>
		);
	}
}
