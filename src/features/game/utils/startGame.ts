import { ChatInputCommandInteraction } from 'discord.js';
import { Players, Room, readyComponent, startEmbed } from '../models';
import { AppError } from '../../../utils';

export const startGame = async (
	interaction: ChatInputCommandInteraction,
	players: Players,
	roomId: string,
) => {
	try {
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
	} catch (error) {
		await AppError(interaction, 'creating start game embed', error);
	}
};
