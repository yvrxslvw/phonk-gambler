import { Deck } from '../deck';
import { Player } from '../player';

export type RoomStatus = 'Preparing' | 'Game' | 'Finishing';

export class Room {
	public roomId: string;
	public players: Player[];
	public status: RoomStatus = 'Preparing';
	public deck = new Deck();

	constructor(roomId: string, players: Player[]) {
		this.roomId = roomId;
		this.players = players;
	}
}
