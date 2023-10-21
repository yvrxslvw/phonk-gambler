import { ChatInputCommandInteraction } from 'discord.js';
import { redBright } from 'colorette';
import { User } from '../../models';
import { Option, Top, topEmbed } from './models';
import { AppError } from '../../utils';

export const topFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		const option = interaction.options.data[0].value as Option;
		const users = await User.findAll({ order: [[option, 'DESC']], limit: 3 });
		if (!users) throw new Error(redBright('Error while getting top users.'));
		const top: Top[] = users.map(user => ({
			name: user.name,
			quantity: user[option],
			winRate: (user.wins + user.blackjacks) / ((user.wins + user.loses + user.blackjacks) / 100),
		}));
		const embeds = [topEmbed(option, top)];

		await interaction.reply({ embeds });
	} catch (error) {
		await AppError(interaction, 'executing top command feature', error);
	}
};

export { topCommand } from './models';
