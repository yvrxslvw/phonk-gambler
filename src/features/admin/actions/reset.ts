import { redBright } from 'colorette';
import { ChatInputCommandInteraction } from 'discord.js';

export const resetFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		if (interaction.user.username !== 'yvrxslvw') {
			await interaction.reply({ content: 'Нет доступа.' });
			return;
		}
		global.rooms = {};
		await interaction.reply({ content: 'Очищено.' });
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while reset rooms.'));
	}
};
