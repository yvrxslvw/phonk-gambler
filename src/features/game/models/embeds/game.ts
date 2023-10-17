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
	const dealerScore = room.status === 'Ход дилера' || dealer.score === 0 ? dealer.score : dealer.cards[0].getScore(false);

	const playersFields: Field[] = players.map(player => ({
		name: `**${player.user.username}** *(${player.score})*`,
		value: player.cards.map(card => card.getString()).join(' '),
		inline: false,
	}));

	const fields: Field[] = [
		{ name: `**Дилер** *(${dealerScore})*`, value: dealer.cards.map(card => card.getString()).join(' '), inline: false },
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
