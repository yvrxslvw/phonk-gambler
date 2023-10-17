import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';

export const insuranceFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while insurance turn.'));
	}
};
