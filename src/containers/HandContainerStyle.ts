import {
	CSSProperties,
} from 'react';

export const styles: {[name: string]: CSSProperties} = {
	hand: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	hand_card: {
		width: '100px',
		height: '150px',
		border: '1px solid grey',
		borderRadius: '10px',
		backgroundColor: 'white',
		marginRight: '10px',
		userSelect: 'none',
	},
};
