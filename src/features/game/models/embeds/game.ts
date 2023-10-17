import { EmbedBuilder } from 'discord.js';

interface Field {
	name: string;
	value: string;
	inline: boolean;
}

export const gameEmbed = (roomId: string) => {
	const players = Object.values(global.rooms[roomId].players);
	const playersFields: Field[] = players.map(player => ({
		name: `**${player.user.username}** *(${player.score})*`,
		value: `${player.cards.join(' ')}`,
		inline: false,
	}));
	const fields: Field[] = [{ name: '**Дилер** *(0)*', value: ``, inline: false }, ...playersFields];

	return new EmbedBuilder({
		title: global.rooms[roomId].status,
		fields,
		footer: { text: 'Good luck, have fun.' },
		timestamp: Date.now(),
		color: 0x9b3f4e,
	});
};
