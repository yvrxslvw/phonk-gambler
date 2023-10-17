import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { timer } from '../../../helpers';
import { endGame } from './endGame';

export const takeCardsDealer = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const render = async (edit: boolean) => await renderInteraction(interaction, roomId, edit);
		const dealer = room.dealer;

		dealer.cards[1].toggleHide();
		await render(false);

		await timer(500);
		while (dealer.score < 17) {
			dealer.takeCard(room, false);
			await render(true);
			await timer(500);
		}

		await endGame(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while dealer taking cards.'));
	}
};
