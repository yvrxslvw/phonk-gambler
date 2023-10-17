import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { errorFeature } from '../../error';

export const checkAccess = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const nowTurning = Object.keys(room.players)[room.turn];
		const user = interaction.user;

		if (!Object.keys(room.players).find(player => player === user.username)) {
			await errorFeature(interaction, 'Это не Ваша комната.');
			return false;
		}
		if (user.username !== nowTurning) {
			await errorFeature(interaction, 'Сейчас не Ваша очередь.');
			return false;
		}
		return true;
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while checking room access.'));
	}
};
