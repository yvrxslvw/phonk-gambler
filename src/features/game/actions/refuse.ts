import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';

export const refuseFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while refuse turn.'));
	}
};
