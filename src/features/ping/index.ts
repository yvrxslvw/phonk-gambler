import { ChatInputCommandInteraction } from 'discord.js';

export const pingFeature = async (interaction: ChatInputCommandInteraction) => {
	await interaction.reply({ content: 'Pong!!!' });
};

export { pingCommand } from './models';
