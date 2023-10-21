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

	public nextTurn = () => {
		this.turn += 1;
		if (!Object.keys(this.players)[this.turn]) {
			this.status = 'Ход Дилера';
			return;
		}
		if (Object.values(this.players)[this.turn].score >= 21) {
			this.nextTurn();
			return;
		}

		this.status = `Ход игрока ${Object.values(this.players)[this.turn].user.username}`;
	};

	public isDealerTurn = (): boolean => {
		if (!Object.keys(this.players)[this.turn]) return true;
		return false;
	};

	public isTurningNow = (username: string): boolean => {
		const nowTurning = Object.keys(this.players)[this.turn];
		if (username === nowTurning) return true;
		return false;
	};

	public isPlayerExists = (username: string): boolean => {
		if (this.players[username] !== undefined) return true;
		return false;
	};
}
