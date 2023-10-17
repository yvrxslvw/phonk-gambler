import { Dealer } from '../dealer';
import { Deck } from '../deck';
import { Player } from '../player';

export class Room {
	public roomId: string;
	public dealer: Dealer;
	public players: Record<string, Player>;
	public status: string;
	public deck: Deck;
	public turn: number;

	constructor(roomId: string, players: Record<string, Player>) {
		this.roomId = roomId;
		this.dealer = new Dealer();
		this.players = players;
		this.status = 'Preparing';
		this.deck = new Deck();
		this.turn = -1;
	}

	public nextTurn = (): boolean => {
		this.turn++;
		if (this.turn + 1 > Object.keys(this.players).length) {
			this.status = 'Ход Дилера';
			return false;
		}
		if (Object.values(this.players)[this.turn].score >= 21) return this.nextTurn();
		this.status = `Ход игрока ${Object.values(this.players)[this.turn].user.username}`;
		return true;
	};
}
