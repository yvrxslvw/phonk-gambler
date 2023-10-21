import { ChatInputCommandInteraction } from 'discord.js';
import { Players, notReadyEmbed } from '../models';
import { AppError } from '../../../utils';

export const checkNotReady = async (
	interaction: ChatInputCommandInteraction,
	players: Players,
	roomId: string,
) => {
	try {
		const notReadyPlayers: string[] = [];
		Object.values(players).forEach(
			player => !player.ready && notReadyPlayers.push(player.user.username),
		);
		if (notReadyPlayers.length > 0 && global.rooms[roomId].status === 'Preparing') {
			await interaction.editReply({
				content: null,
				components: [],
				embeds: [notReadyEmbed(notReadyPlayers)],
			});
			delete global.rooms[roomId];
		}
	} catch (error) {
		await AppError(interaction, 'checking not ready players', error);
	}
};
