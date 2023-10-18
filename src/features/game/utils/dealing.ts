import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { timer } from '../../../helpers';
import { takeCardsDealer } from './takeCardsDealer';

export const gameDealing = async (interaction: ButtonInteraction, roomId: string) => {
	const room = global.rooms[roomId];
	const render = () => renderInteraction(interaction, roomId, true);
	const players = Object.values(room.players);
	const { takeCard } = room.dealer;

	room.status = 'Инициализация';
	await render();

	await timer(1500);
	room.status = 'Раздача карт';
	await render();

	await timer(500);
	takeCard(room, false);
	await render();

	await Promise.all(
		players.map(async player => {
			await timer(500);
			player.takeCard(room);
			await render();
		}),
	);

	await timer(500);
	takeCard(room, true);
	await render();

	await Promise.all(
		players.map(async player => {
			await timer(500);
			player.takeCard(room);
			await render();
		}),
	);

	if (!room.nextTurn()) await takeCardsDealer(interaction, roomId);
	else await render();
};
