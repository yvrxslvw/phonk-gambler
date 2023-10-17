import { ButtonInteraction } from 'discord.js';
import { gameComponent, gameEmbed } from '../models';
import { redBright } from 'colorette';

export const renderInteraction = async (interaction: ButtonInteraction, roomId: string, edit: boolean) => {
	try {
		if (edit) {
			await interaction.editReply({
				content: null,
				embeds: [gameEmbed(roomId)],
				components: [gameComponent(roomId)],
			});
		} else {
			await interaction.update({
				content: null,
				embeds: [gameEmbed(roomId)],
				components: [gameComponent(roomId)],
			});
		}
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while rendering game embed.'));
	}
};
