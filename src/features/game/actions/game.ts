import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { gameDealing } from '../utils';

export const gameFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		await gameDealing(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while the game process.'));
	}
};
