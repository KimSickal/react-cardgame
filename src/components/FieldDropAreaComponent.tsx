import * as React from 'react';

import {
	dropCard,
} from '../actions';

import {
	getDraggingTarget,
} from '../selectors';

interface ComponentProps {
	draggingTarget: ReturnType<typeof getDraggingTarget>;

	dropCard: typeof dropCard;
}

interface ComponentState {
	hoveringDirection: number;
}

export class FieldDropAreaComponent extends React.Component<ComponentProps, ComponentState> {
	constructor(props: ComponentProps) {
		super(props);
		this.state = {
			hoveringDirection: -1,
		};
		this.onDrop = this.onDrop.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.onDragLeave = this.onDragLeave.bind(this);
	}

	private onDragOver(event: React.DragEvent, direction: number) {
		event.preventDefault();
		this.setState({
			hoveringDirection: direction,
		});
	}

	private onDragLeave(event: React.DragEvent) {
		event.preventDefault();
		this.setState({
			hoveringDirection: -1,
		});
	}

	private onDrop(direction: number) {
		this.setState({
			hoveringDirection: -1,
		});
		this.props.dropCard(direction);
	}

	public render() {
		const {
			hoveringDirection,
		} = this.state;

		const {
			draggingTarget,
		} = this.props;

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
				style={{
					opacity: draggingTarget === null ? 0 : 1,
				}}
			>
				{
					Array.from(Array(4)).map((_, i) => {
						return (
							<polygon
								points={`${points[i]} ${points[i+1]} ${centerPoint}`}
								style={{
									fill: hoveringDirection === i ? 'green' : 'grey',
								}}
								key={i}
								onDragOver={(event: React.DragEvent) => {this.onDragOver(event, i);}}
								onDrop={() => this.onDrop(i)}
								onDragLeave={this.onDragLeave}
							/>
						);
					})
				}
			</svg>
		);
	}
}
