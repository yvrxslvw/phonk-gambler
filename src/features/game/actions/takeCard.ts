import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from '../utils';
import { checkAccess } from '../utils/checkAccess';

export const takeCardFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const user = interaction.user;
		const player = room.players[user.username];

		if (!checkAccess(interaction, roomId)) return;
		player.takeCard(room);
		renderInteraction(interaction, roomId, false);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while taking card.'));
	}
};
