import { ChatInputCommandInteraction } from 'discord.js';
import { statsEmbed } from './models';
import { User } from '../../models';

export const statsFeature = async (interaction: ChatInputCommandInteraction) => {
	const name = interaction.user.username;
	const user = await User.findOne({ where: { name } });
	const { wins, loses, blackjacks } = user || { wins: 0, loses: 0, blackjacks: 0 };
	const embeds = [statsEmbed(name, wins, loses, blackjacks)];
	await interaction.reply({ embeds, ephemeral: true });
};

export { statsCommand } from './models';
