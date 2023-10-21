import { ChatInputCommandInteraction } from 'discord.js';
import { AppError } from '../../utils';

export const pingFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		await interaction.reply({ content: 'Pong!!!' });
	} catch (error) {
		await AppError(interaction, 'executing ping command feature', error);
	}
};

export { pingCommand } from './models';
