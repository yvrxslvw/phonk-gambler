import { ChatInputCommandInteraction } from 'discord.js';
import { rulesEmbed } from './models';
import { AppError } from '../../utils';

const embeds = [rulesEmbed];

export const rulesFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		await interaction.reply({ embeds, ephemeral: true });
	} catch (error) {
		await AppError(interaction, 'executing rules command feature', error);
	}
};

export { rulesCommand } from './models';
