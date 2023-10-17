import { ActionRowBuilder, ButtonBuilder } from 'discord.js';
import { insuranceButton, refuseButton, takeCardButton } from '../buttons';

export const gameComponent = (roomId: string): ActionRowBuilder<ButtonBuilder> => {
	const room = global.rooms[roomId];
	const dealer = room.dealer;

	let takeButtonDisabled = true;
	let refuseButtonDisabled = true;
	let insuranceButtonDisabled = true;

	if (room.status !== 'Раздача карт' && room.status !== 'Инициализация' && room.status !== 'Ход Дилера') {
		takeButtonDisabled = false;
		refuseButtonDisabled = false;
		insuranceButtonDisabled = false;

		const dealerCardValue = dealer.cards[0].value;
		if (
			dealerCardValue !== '10' &&
			dealerCardValue !== 'J' &&
			dealerCardValue !== 'Q' &&
			dealerCardValue !== 'K' &&
			dealerCardValue !== 'A'
		)
			insuranceButtonDisabled = true;
	}

	return new ActionRowBuilder({
		components: [
			takeCardButton(roomId, takeButtonDisabled),
			refuseButton(roomId, refuseButtonDisabled),
			insuranceButton(roomId, insuranceButtonDisabled),
		],
	});
};
