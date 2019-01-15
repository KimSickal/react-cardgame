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
	FieldDropAreaComponent,
} from '../components';

import {
	getDraggingTarget,
	getCharacters,
} from '../selectors';

import {
	dropCard,
	appendCharacterIfCould,
} from '../actions';

import {
	State,
} from '../reducers';

interface ComponentProps {
	draggingTarget: ReturnType<typeof getDraggingTarget>;
	characters: ReturnType<typeof getCharacters>;

	dropCard: typeof dropCard;
	appendCharacterIfCould: typeof appendCharacterIfCould;
}

class FieldComponent extends React.Component<ComponentProps> {
	public componentDidMount() {
		this.props.appendCharacterIfCould({
			position: {
				posX: 0,
				posY: 0,
			},
		});
	}

	public render() {
		const {
			characters,
		} = this.props;

		return (
			<React.Fragment>
				<FieldDropAreaComponent
					{...this.props}
				/>
				{
					characters[0] === undefined ?
					null
					:
					<div
						style={{
							position: 'absolute',
							backgroundColor: 'black',
							top: `${characters[0].position.posY * 10}px`,
							left: `${characters[0].position.posX * 10}px`,
							width: `10px`,
							height: `10px`,
						}}
					/>
				}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		draggingTarget: getDraggingTarget(state),
		characters: getCharacters(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		dropCard,
		appendCharacterIfCould,
	}, dispatch);
}

export const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(FieldComponent);
