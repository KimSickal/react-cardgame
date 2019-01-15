import {
	Character,
	CellType,
	fieldSize,
	CellCode,
} from '../models';

import {
	FieldAction,
	FieldKeys,
} from '../actions';

export interface FieldState {
	characters: Character[];
	field: CellType[][];
}

const initialFieldState: FieldState = {
	characters: [],
	field: Array.from(Array(fieldSize[0])).map(() => {
		return Array.from(Array(fieldSize[1])).map(() => {
			return CellCode.CELL_BLANK;
		});
	}),
};

export function field(state = initialFieldState, action: FieldAction) {
	const {
		characters,
		field,
	} = state;
	console.log(characters);
	switch(action.type) {
		case FieldKeys.SET_CELL:
			field[action.targetPosition.posX][action.targetPosition.posY] = action.cellType;
			return {
				...state,
				field: field,
			};
		case FieldKeys.MOVE_CHARACTER:
			characters[action.characterIndex] = {
				...characters[action.characterIndex],
				position: action.targetPosition,
			};
			return {
				...state,
				characters: characters,
			};
		case FieldKeys.APPEND_CHARACTER:
			return {
				...state,
				characters: characters.concat(action.targetCharacter),
			};
		default:
			return state;
	}
}
