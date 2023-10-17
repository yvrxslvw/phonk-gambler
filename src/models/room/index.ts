import { Deck } from '../deck';
import { Dealer, Player } from '../player';

export type RoomStatus = 'Preparing' | 'Game' | 'Finishing';

export class Room {
	public roomId: string;
	public dealer: Dealer = new Dealer();
	public players: Record<string, Player>;
	public status: RoomStatus = 'Preparing';
	public deck = new Deck();

	constructor(roomId: string, players: Record<string, Player>) {
		this.roomId = roomId;
		this.players = players;
	}
}
