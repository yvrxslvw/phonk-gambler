import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { errorEmbed } from './models';
import { timer } from '../../helpers';

const embeds = [errorEmbed];

export const errorFeature = async (interaction: ChatInputCommandInteraction | ButtonInteraction, text: string) => {
	embeds[0].setDescription(text);

	await interaction.reply({ embeds, ephemeral: true });
	await timer(10 * 1000);
	await interaction.deleteReply();
};
