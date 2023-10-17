import { redBright } from 'colorette';
import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { gameDealing, renderInteraction } from '../utils';

export const gameFeature = async (interaction: ChatInputCommandInteraction | ButtonInteraction, roomId: string) => {
	try {
		await gameDealing(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while the game process.'));
	}
};
