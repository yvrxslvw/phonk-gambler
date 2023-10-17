import { Card } from '../card';
import { Room } from '../room';

export class Dealer {
	public name = 'Дилер';
	public cards: Card[] = [];
	public score = 0;

	constructor() {}

	public takeCard = (room: Room, hidden: boolean) => {
		const card = room.deck.takeCard();
		if (hidden) card.toggleHide();
		this.cards.push(card);
		this.score += card.getScore(this.score + 11 <= 21);
	};
}
