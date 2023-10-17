import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction, checkAccess, takeCardsDealer } from '../utils';

export const refuseFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];

		if (!checkAccess(interaction, roomId)) return;
		if (!room.nextTurn()) return await takeCardsDealer(interaction, roomId);
		await renderInteraction(interaction, roomId, false);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while refuse turn.'));
	}
};
