type CardSuit = 'diamonds' | 'spades' | 'hearts' | 'clubs';
type CardValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export class Card {
	constructor(suit: CardSuit, value: CardValue) {
		return `[:${suit}: ${value}]`;
	}
}
