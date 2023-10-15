import { Player } from '../player';

export type RoomStatus = 'Preparing' | 'Game' | 'Finishing';

export class Room {
	public players: Player[];
	public status: RoomStatus = 'Preparing';

	constructor(players: Player[]) {
		this.players = players;
	}
}
