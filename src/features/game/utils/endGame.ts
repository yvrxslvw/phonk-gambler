import { ButtonInteraction } from 'discord.js';
import { getResults } from './getResults';
import { AppError } from '../../../utils';

export const endGame = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		await getResults(interaction, roomId);
		await interaction.editReply({ components: [] });
		delete global.rooms[roomId];
	} catch (error) {
		await AppError(interaction, 'ending the game', error);
	}
};
