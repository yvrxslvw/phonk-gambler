import { redBright } from 'colorette';
import { Card } from '../card';
import { Room } from '../room';

type Status = '' | '**Победа**' | '**Поражение**' | '**Блэкджэк**';

export class Dealer {
	public name = 'Дилер';
	public cards: Card[] = [];
	public score = 0;
	public status: Status = '';

	constructor() {}

	public takeCard = (room: Room, hidden: boolean) => {
		const card = room.deck.takeCard();
		if (!card) throw new Error(redBright('Error while taking the card.'));
		if (hidden) card.toggleHide();
		this.cards.push(card);
		this.score += card.getScore(this.score + 11 <= 21);
		if (this.score === 21) this.status = '**Блэкджэк**';
		else if (this.score > 21) this.status = '**Поражение**';
	};
}
