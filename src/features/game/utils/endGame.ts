import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { getResults } from './getResults';

export const endGame = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		await getResults(interaction, roomId);
		await interaction.editReply({ components: [] });
		delete global.rooms[roomId];
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while ending the game.'));
	}
};
