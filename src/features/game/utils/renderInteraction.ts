import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { gameComponent, gameEmbed } from '../models';

export const renderInteraction = async (interaction: ChatInputCommandInteraction | ButtonInteraction, roomId: string) => {
	await interaction.editReply({
		content: null,
		embeds: [gameEmbed(roomId)],
		components: [gameComponent(roomId)],
	});
};
