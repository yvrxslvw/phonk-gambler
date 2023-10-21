import { redBright } from 'colorette';
import { ButtonInteraction } from 'discord.js';
import { renderInteraction, takeCardsDealer } from '../utils';
import { errorFeature } from '../../error';

export const refuseFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const { cards } = room.players[interaction.user.username];
		const { username } = interaction.user;

		if (!room.isPlayerExists(username)) {
			await errorFeature(interaction, 'Это не Ваша комната.');
			return;
		}
		if (!room.isTurningNow(username)) {
			await errorFeature(interaction, 'Сейчас не Ваша очередь.');
			return;
		}
		if (room.dealer.cards[0].value === 'A' && cards.length === 2) {
			await errorFeature(
				interaction,
				'Вы не можете отказаться, когда у Дилера первая карта - Туз.',
			);
			return;
		}
		await interaction.update({ content: '' });

		room.nextTurn();
		if (room.isDealerTurn()) {
			await takeCardsDealer(interaction, roomId);
			return;
		}
		await renderInteraction(interaction, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while refuse turn.'));
	}
};
