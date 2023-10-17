import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { startEmbed } from '../models';
import { gameFeature } from './game';

export const readyFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		global.rooms[roomId].players[interaction.user.username].ready = true;
		await interaction.update({ embeds: [startEmbed(Object.values(global.rooms[roomId].players))] });
		if (Object.values(global.rooms[roomId].players).every(player => player.ready)) await gameFeature(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while ready in the game.'));
	}
};
