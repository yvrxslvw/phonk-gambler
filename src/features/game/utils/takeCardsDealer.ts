/* eslint-disable no-await-in-loop */
import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { timer } from '../../../helpers';
import { endGame } from './endGame';

export const takeCardsDealer = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const render = () => renderInteraction(interaction, roomId);

		room.dealer.cards[1].toggleHide();
		await render();

		await timer(500);
		while (room.dealer.score < 17) {
			room.takeDealerCard(false);
			await render();
			await timer(500);
		}

		await endGame(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while dealer taking cards.'));
	}
};
