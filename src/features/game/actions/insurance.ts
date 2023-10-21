import { ButtonInteraction } from 'discord.js';
import { takeCardsDealer } from '../utils';
import { errorFeature } from '../../error';
import { AppError } from '../../../utils';

export const gameInsuranceFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const { username } = interaction.user;
		const player = room.players[username];

		if (!room.isPlayerExists(username)) {
			await errorFeature(interaction, 'Это не Ваша комната.');
			return;
		}
		if (!room.isTurningNow(username)) {
			await errorFeature(interaction, 'Сейчас не Ваша очередь.');
			return;
		}
		await interaction.update({ content: '' });

		player.insurance = true;
		room.nextTurn();
		if (room.isDealerTurn()) await takeCardsDealer(interaction, roomId);
	} catch (error) {
		await AppError(interaction, 'executing button insurance feature', error);
	}
};
