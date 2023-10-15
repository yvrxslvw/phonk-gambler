import { User } from 'discord.js';

export type RoomStatus = 'Preparing' | 'Game' | 'Finishing';

export class Room {
	public players: User[];
	public status: RoomStatus = 'Preparing';

	constructor(players: User[]) {
		this.players = players;
	}
}
