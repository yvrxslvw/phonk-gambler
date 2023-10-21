import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { timer } from '../../../helpers';
import { takeCardsDealer } from './takeCardsDealer';

export const gameDealing = async (interaction: ButtonInteraction, roomId: string) => {
	const room = global.rooms[roomId];
	const render = () => renderInteraction(interaction, roomId);
	const players = Object.values(room.players);

	room.status = 'Инициализация';
	await render();

	await timer(1500);
	room.status = 'Раздача карт';
	await render();

	await timer(500);
	room.takeDealerCard(false);
	await render();

	await timer(500);
	await Promise.all(
		players.map(async player => {
			room.takePlayerCard(player.user.username);
			await render();
		}),
	);

	await timer(500);
	room.takeDealerCard(true);
	await render();

	await timer(500);
	await Promise.all(
		players.map(async player => {
			room.takePlayerCard(player.user.username);
			await render();
		}),
	);

	await timer(250);
	room.nextTurn();

	await timer(500);
	if (room.isDealerTurn()) await takeCardsDealer(interaction, roomId);
	else await render();
};
