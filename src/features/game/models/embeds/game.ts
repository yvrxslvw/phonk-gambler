import { EmbedBuilder } from 'discord.js';

interface Field {
	name: string;
	value: string;
	inline: boolean;
}

export const gameEmbed = (roomId: string, title: string) => {
	const players = Object.values(global.rooms[roomId].players);
	const playersFields: Field[] = players.map(player => ({
		name: `**${player.user.username}**`,
		value: `${player.cards.join(' ')}`,
		inline: true,
	}));
	const fields: Field[] = [{ name: '**Дилер**', value: ``, inline: false }, ...playersFields];

	return new EmbedBuilder({
		title,
		fields,
		footer: { text: 'Good luck, have fun.' },
		timestamp: Date.now(),
		color: 0x9b3f4e,
	});
};
