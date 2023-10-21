import { User } from 'discord.js';
import { Card } from '../card';

type Status = '' | '**Победа**' | '**Поражение**' | '**Ничья**' | '**Блэкджек**';

export class Player {
	public user: User;

	public ready = false;

	public cards: Card[] = [];

	public score = 0;

	public status: Status = '';

	public insurance: boolean = false;

	constructor(user: User) {
		this.user = user;
	}
}
