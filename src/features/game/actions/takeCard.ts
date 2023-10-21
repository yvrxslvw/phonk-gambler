import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction, takeCardsDealer } from '../utils';
import { errorFeature } from '../../error';
import { timer } from '../../../helpers';

export const takeCardFeature = async (interaction: ButtonInteraction, roomId: string) => {
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

		player.takeCard(room);
		if (player.score >= 21) {
			room.nextTurn();
			if (room.isDealerTurn()) await takeCardsDealer(interaction, roomId);
			return;
		}
		renderInteraction(interaction, roomId, false);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while taking card.'));
	}
};
