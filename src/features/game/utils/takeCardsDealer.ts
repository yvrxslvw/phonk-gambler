/* eslint-disable no-await-in-loop */
import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { timer } from '../../../helpers';
import { endGame } from './endGame';

export const takeCardsDealer = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const render = (edit: boolean) => renderInteraction(interaction, roomId, edit);
		const { takeCard, cards } = room.dealer;

		cards[1].toggleHide();
		await render(false);

		await timer(500);
		while (room.dealer.score < 17) {
			takeCard(room, false);
			await render(true);
			await timer(500);
		}

		await endGame(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while dealer taking cards.'));
	}
};
