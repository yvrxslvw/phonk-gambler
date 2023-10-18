import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { checkAccess, takeCardsDealer } from '../utils';

export const insuranceFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const { username } = interaction.user;
		const player = room.players[username];

		if (!checkAccess(interaction, roomId)) return;
		player.insurance = true;
		if (!room.nextTurn()) await takeCardsDealer(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while insurance turn.'));
	}
};
