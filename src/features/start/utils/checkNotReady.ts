import { ChatInputCommandInteraction } from 'discord.js';
import { Players } from '../models';
import { notReadyEmbed } from '../models';

export const checkNotReady = async (interaction: ChatInputCommandInteraction, players: Players, roomId: string) => {
	let notReadyPlayers: string[] = [];
	Object.values(players).forEach(player => !player.ready && notReadyPlayers.push(player.user.username));
	if (notReadyPlayers.length > 0 && global.rooms[roomId].status === 'Preparing') {
		await interaction.editReply({
			content: '',
			components: [],
			embeds: [notReadyEmbed(notReadyPlayers)],
		});
		delete global.rooms[roomId];
	}
};
