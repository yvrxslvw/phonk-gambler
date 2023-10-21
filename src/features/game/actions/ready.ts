import { ButtonInteraction } from 'discord.js';
import { startEmbed } from '../models';
import { gameFeature } from './game';
import { errorFeature } from '../../error';
import { AppError } from '../../../utils';

export const gameReadyFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const { username } = interaction.user;

		if (!room.isPlayerExists(username)) {
			errorFeature(interaction, 'Это не Ваша комната.');
			return;
		}

		global.rooms[roomId].players[interaction.user.username].ready = true;
		await interaction.update({ embeds: [startEmbed(Object.values(room.players))] });
		if (Object.values(global.rooms[roomId].players).every(player => player.ready)) await gameFeature(interaction, roomId);
	} catch (error) {
		await AppError(interaction, 'executing button ready feature', error);
	}
};
