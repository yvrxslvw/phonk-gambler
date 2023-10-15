import { redBright } from 'colorette';
import { ChatInputCommandInteraction } from 'discord.js';
import { readyComponent, startEmbed } from './models';
import { v4 as uuidv4 } from 'uuid';
import { Player, Room } from '../../models';
import { timer } from '../../helpers';
import { notReadyEmbed } from './models/embeds/notReady';

export const startFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		const author = interaction.user;
		const players = interaction.options.data.map(option => new Player(option.user!));
		players.push(new Player(author));

		// * Some features...

		const roomId = uuidv4();
		global.rooms[roomId] = new Room(players);

		let content = '';
		players.forEach(player => (content += `<@${player.user.id}> `));
		await interaction.reply({ content, embeds: [startEmbed(author, players)], components: [readyComponent(roomId)] });

		await timer(15 * 1000);
		const notReadyPlayers: string[] = [];
		players.forEach(player => !player.ready && notReadyPlayers.push(player.user.username));
		if (notReadyPlayers.length > 0)
			await interaction.editReply({
				content: '',
				components: [],
				embeds: [notReadyEmbed(notReadyPlayers)],
			});
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while starting the game.'));
	}
};

export { startCommand } from './models';
