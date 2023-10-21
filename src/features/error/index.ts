import { Interaction } from 'discord.js';
import { errorEmbed } from './models';
import { timer } from '../../utils';

const embeds = [errorEmbed];

export const errorFeature = async (interaction: Interaction, text: string) => {
	if (!interaction.isButton() && !interaction.isChatInputCommand()) return;

	embeds[0].setDescription(text);

	await interaction.reply({ embeds, ephemeral: true });
	await timer(10 * 1000);
	await interaction.deleteReply();
};
