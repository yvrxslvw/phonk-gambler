import { initialDeck } from './initialDeck';

export class Deck {
	private cards = initialDeck.sort(() => Math.random() - 0.5);

	public takeCard = () => this.cards.shift()!;
}
