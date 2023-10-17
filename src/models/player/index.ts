import { User } from 'discord.js';
import { Card } from '../card';
import { Room } from '../room';
import { redBright } from 'colorette';

type Status = '' | '**Победа**' | '**Поражение**' | '**Ничья**' | '**Блэкджэк**';

export class Player {
	public user: User;
	public ready = false;
	public cards: Card[] = [];
	public score = 0;
	public status: Status = '';

	constructor(user: User) {
		this.user = user;
	}

	public takeCard = (room: Room) => {
		const card = room.deck.takeCard();
		if (!card) throw new Error(redBright('Error while taking the card.'));
		this.cards.push(card);
		this.score += card.getScore(this.score + 11 <= 21);
		if (this.score === 21) this.status = '**Блэкджэк**';
		else if (this.score > 21) this.status = '**Поражение**';
	};
}
