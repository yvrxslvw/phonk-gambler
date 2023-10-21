import { ChatInputCommandInteraction } from 'discord.js';
import { cardsEmbed } from './models';
import { AppError } from '../../utils';

const embeds = [cardsEmbed];

export const cardsFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		await interaction.reply({ embeds, ephemeral: true });
	} catch (error) {
		await AppError(interaction, 'executing cards command feature', error);
	}
};

export { cardsCommand } from './models';
