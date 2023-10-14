import { ChatInputCommandInteraction } from 'discord.js';
import { rulesEmbed } from './models';

const embeds = [rulesEmbed];

export const rulesFeature = async (interaction: ChatInputCommandInteraction) => {
	await interaction.reply({ embeds, ephemeral: true });
};

export { rulesCommand } from './models';
