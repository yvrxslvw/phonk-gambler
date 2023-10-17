import { Card } from '../card';
import { initialDeck } from './initialDeck';

export class Deck {
	private cards: Card[];

	constructor() {
		const newDeck = initialDeck;
		this.cards = newDeck.sort(() => Math.random() - 0.5);
	}

	public takeCard = () => this.cards.shift();
}
