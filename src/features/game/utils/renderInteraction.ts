import { ButtonInteraction } from 'discord.js';
import { redBright } from 'colorette';
import { gameComponent, gameEmbed } from '../models';

export const renderInteraction = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		await interaction.editReply({
			content: null,
			embeds: [gameEmbed(roomId)],
			components: [gameComponent(roomId)],
		});
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while rendering game embed.'));
	}
};
