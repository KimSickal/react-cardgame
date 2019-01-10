export interface Card {
	name: string;
	suit: SuitName;
	index: number;
}

export interface Suit {
	icon: string;
	color: string;
}

export enum SuitName {
	SPADE = 'SPADE',
	DIAMOND = 'DAIMOND',
	HEART = 'HEART',
	CLUB = 'CLUB',
}

export const Suits: {[name: string]: Suit} = {
	SPADE: {
		icon: '♠',
		color: 'black',
	},
	DIAMOND: {
		icon: '◆',
		color: 'red',
	},
	HEART: {
		icon: '♥',
		color: 'red',
	},
	CLUB: {
		icon: '♣',
		color: 'black',
	},
};
