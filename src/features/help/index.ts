import { ChatInputCommandInteraction } from 'discord.js';
import { helpEmbed } from './models';
import { AppError } from '../../utils';

const embeds = [helpEmbed];

export const helpFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		await interaction.reply({ embeds, ephemeral: true });
	} catch (error) {
		await AppError(interaction, 'executing help command feature', error);
	}
};

export { helpCommand } from './models';
