import { ChatInputCommandInteraction } from 'discord.js';
import { cardsEmbed } from './models';

const embeds = [cardsEmbed];

export const cardsFeature = async (interaction: ChatInputCommandInteraction) => {
	await interaction.reply({ embeds, ephemeral: true });
};

export { cardsCommand } from './models';
