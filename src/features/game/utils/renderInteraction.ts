import { ButtonInteraction } from 'discord.js';
import { gameComponent, gameEmbed } from '../models';

export const renderInteraction = async (interaction: ButtonInteraction, roomId: string, edit: boolean) => {
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
};
