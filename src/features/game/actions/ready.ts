import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { startEmbed } from '../models';

export const readyFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		global.rooms[roomId].players[interaction.user.username].ready = true;
		await interaction.update({ embeds: [startEmbed(Object.values(global.rooms[roomId].players))] });
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while ready in the game.'));
	}
};
