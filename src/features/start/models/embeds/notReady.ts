import { EmbedBuilder } from 'discord.js';

export const notReadyEmbed = (notReadyPlayers: string[]) =>
	new EmbedBuilder({
		title: 'Игра не началась.',
		description: `Игроки не готовы:\n${notReadyPlayers.join('\n')}`,
		timestamp: Date.now(),
		color: 0xff4040,
	});
