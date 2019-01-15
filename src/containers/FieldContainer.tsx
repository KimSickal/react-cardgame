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
	getCharacters: ReturnType<typeof getCharacters>;

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
		return (
			<FieldDropAreaComponent
				{...this.props}
			/>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		draggingTarget: getDraggingTarget(state),
		getCharacters: getCharacters(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
	return bindActionCreators({
		dropCard,
		appendCharacterIfCould,
	}, dispatch);
}

export const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(FieldComponent);
