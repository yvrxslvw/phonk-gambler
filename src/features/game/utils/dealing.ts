import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { timer } from '../../../helpers';

export const gameDealing = async (interaction: ChatInputCommandInteraction | ButtonInteraction, roomId: string) => {
	const room = global.rooms[roomId];
	const render = async () => await renderInteraction(interaction, roomId);

	room.status = 'Инициализация';
	await render();

	await timer(1500);
	room.status = 'Раздача карт';
	await render();

	await timer(500);
	room.dealer.takeCard(room, false);
	await render();

	await Promise.all(
		Object.values(room.players).map(async player => {
			await timer(500);
			player.takeCard(room);
			await render();
		}),
	);

	await timer(500);
	room.dealer.takeCard(room, true);
	await render();

	await Promise.all(
		Object.values(room.players).map(async player => {
			await timer(500);
			player.takeCard(room);
			await render();
		}),
	);
};
