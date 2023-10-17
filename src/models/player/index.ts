import { User } from 'discord.js';
import { Card } from '../card';
import { Room } from '../room';

export class Player {
	public user: User;
	public ready = false;
	public cards: Card[] = [];
	public score = 0;

	constructor(user: User) {
		this.user = user;
	}

	public takeCard = (room: Room) => {
		const card = room.deck.takeCard();
		this.cards.push(card);
		this.score += card.getScore(this.score <= 10);
	};
}
