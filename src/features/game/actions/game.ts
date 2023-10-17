import { redBright } from 'colorette';
import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { gameComponent, gameEmbed } from '../models';

export const gameFeature = async (interaction: ChatInputCommandInteraction | ButtonInteraction, roomId: string) => {
	try {
		global.rooms[roomId].status = 'Game';
		await interaction.editReply({
			content: null,
			embeds: [gameEmbed(roomId, 'Инициализация')],
			components: [gameComponent(roomId)],
		});
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while the game process.'));
	}
};
