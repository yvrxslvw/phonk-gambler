import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction, checkAccess, takeCardsDealer } from '../utils';

export const takeCardFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const user = interaction.user;
		const player = room.players[user.username];

		if (!checkAccess(interaction, roomId)) return;
		player.takeCard(room);
		if (player.score >= 21) {
			if (!room.nextTurn()) return await takeCardsDealer(interaction, roomId);
			return;
		}
		renderInteraction(interaction, roomId, false);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while taking card.'));
	}
};
