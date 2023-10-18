import { EmbedBuilder } from 'discord.js';
import { Player } from '../../../../models';

export const startEmbed = (players: Player[]) => {
	let description = '**Участники:**\n';
	players.forEach(player => {
		description += `*${player.user.username}* - **${player.ready ? 'Ready' : 'Not ready'}**\n`;
	});
	description += '\n**Через 15 секунд начнется игра! Как будете готовы - нажмите на кнопку "Готов!".**';

	return new EmbedBuilder({
		title: `${players[0].user.username} запустил игру!`,
		description,
		color: 0x9b3f4e,
		footer: { text: 'Good luck, have fun.' },
		timestamp: Date.now(),
	});
};
