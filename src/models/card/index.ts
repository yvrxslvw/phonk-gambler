type CardSuit = 'spades' | 'hearts' | 'diamonds' | 'clubs';
type CardValue = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export class Card {
	private suit: CardSuit;
	private value: CardValue;
	private hidden: boolean = false;

	constructor(suit: CardSuit, value: CardValue) {
		this.suit = suit;
		this.value = value;
	}

	public get = () => (this.hidden ? '[???]' : `[:${this.suit}: ${this.value}]`);

	public toggleHide = () => (this.hidden = !this.hidden);
}
