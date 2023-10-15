import { User } from 'discord.js';

export class Player {
	public user: User;
	public ready: boolean = false;
	public cards: string[] = []; // !
	public score: number = 0;

	constructor(user: User) {
		this.user = user;
	}
}
