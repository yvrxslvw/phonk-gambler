import { ButtonInteraction } from 'discord.js';
import { gameComponent, gameEmbed } from '../models';
import { AppError } from '../../../utils';

export const renderInteraction = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		await interaction.editReply({
			content: null,
			embeds: [gameEmbed(roomId)],
			components: [gameComponent(roomId)],
		});
	} catch (error) {
		await AppError(interaction, 'rendering game interaction', error);
	}
};
