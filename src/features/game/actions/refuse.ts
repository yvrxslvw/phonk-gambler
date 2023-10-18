import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction, checkAccess, takeCardsDealer } from '../utils';
import { errorFeature } from '../../error';

export const refuseFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const player = room.players[interaction.user.username];

		if (!checkAccess(interaction, roomId)) return;
		if (room.dealer.cards[0].value === 'A' && player.cards.length === 2) {
			await errorFeature(interaction, 'Вы не можете отказаться, когда у Дилера первая карта - Туз.');
			return;
		}
		if (!room.nextTurn()) {
			await takeCardsDealer(interaction, roomId);
			return;
		}
		await renderInteraction(interaction, roomId, false);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while refuse turn.'));
	}
};
