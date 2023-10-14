import { ChatInputCommandInteraction } from 'discord.js';
import { helpEmbed } from './models';

const embeds = [helpEmbed];

export const helpFeature = async (interaction: ChatInputCommandInteraction) => {
	await interaction.reply({ embeds, ephemeral: true });
};

export { helpCommand } from './models';
