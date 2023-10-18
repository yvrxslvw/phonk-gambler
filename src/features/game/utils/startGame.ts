import { ChatInputCommandInteraction } from 'discord.js';
import { Players, readyComponent, startEmbed } from '../models';
import { Room } from '../../../models';

export const startGame = async (interaction: ChatInputCommandInteraction, players: Players, roomId: string) => {
	global.rooms[roomId] = new Room(roomId, players);
	let content = '';
	Object.values(players).forEach(player => {
		content += `<@${player.user.id}> `;
	});
	await interaction.reply({
		content,
		embeds: [startEmbed(Object.values(players))],
		components: [readyComponent(roomId)],
	});
};
