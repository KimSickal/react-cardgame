import {
	Card,
} from '../models';

export interface Suit {
	icon: string;
	color: string;
}

export const SuitNames = [
	'SPADE',
	'DIAMOND',
	'HEART',
	'CLUB',
];

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

export const trumpNumbers = [
	'A',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'J',
	'Q',
	'K',
];


export const newTrumpDeck: Card[] = (
	SuitNames.map((suitName) => {
		return (trumpNumbers.map((trumpNumber, i) => {
			return {
				name: `${Suits[suitName].icon} ${trumpNumber}`,
				category: suitName,
				subCategory: i + 1,
			} as Card;
		}));
	}).reduce((a: Card[], b: Card[]) => {
		return a.concat(b);
	})
);
