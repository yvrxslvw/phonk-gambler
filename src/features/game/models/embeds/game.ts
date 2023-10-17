import { EmbedBuilder } from 'discord.js';

interface Field {
	name: string;
	value: string;
	inline: boolean;
}

export const gameEmbed = (roomId: string) => {
	const room = global.rooms[roomId];
	const players = Object.values(room.players);
	const dealer = room.dealer;
	const dealerScore =
		room.status !== 'Ход Дилера' && dealer.score !== 0 && room.status !== 'Игра окончена.'
			? dealer.cards[0].getScore(true)
			: dealer.score;
	const dealerStatus = room.status === 'Ход Дилера' || room.status === 'Игра окончена.' ? dealer.status : '';

	const playersFields: Field[] = players.map(player => ({
		name: `**${player.user.username}** *(${player.score})* ${player.status}`,
		value: player.cards.map(card => card.getString()).join(' '),
		inline: false,
	}));

	const fields: Field[] = [
		{
			name: `**Дилер** *(${dealerScore})* ${dealerStatus}`,
			value: dealer.cards.map(card => card.getString()).join(' '),
			inline: false,
		},
		...playersFields,
	];

	return new EmbedBuilder({
		title: room.status,
		fields,
		footer: { text: 'Good luck, have fun.' },
		timestamp: Date.now(),
		color: 0x9b3f4e,
	});
};
