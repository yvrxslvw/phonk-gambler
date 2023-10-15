import { Deck } from '../deck';
import { Player } from '../player';

export type RoomStatus = 'Preparing' | 'Game' | 'Finishing';

export class Room {
	public players: Player[];
	public status: RoomStatus = 'Preparing';
	public deck = new Deck();

	constructor(players: Player[]) {
		this.players = players;
	}
}
