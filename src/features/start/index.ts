import { redBright } from 'colorette';
import { ChatInputCommandInteraction } from 'discord.js';
import { readyComponent, startEmbed } from './models';
import { v4 as uuidv4 } from 'uuid';
import { Player, Room } from '../../models';
import { duplicates, timer } from '../../helpers';
import { notReadyEmbed } from './models/embeds/notReady';
import { errorFeature } from '../error';

export const startFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		const author = interaction.user;
		const players: Record<string, Player> = {};
		interaction.options.data.forEach(option => {
			if (!option.user) return;
			players[option.user.username] = new Player(option.user);
		});

		let error: string = '';
		Object.values(players).forEach(player => {
			if (player.user.bot) error = `Выбранный игрок ${player.user.username} - бот.`;
			else if (player.user.username === author.username) error = 'Вы указали себя в параметрах запуска игры.';
		});
		if (duplicates(Object.values(players).map(player => player.user.username)))
			error = 'Игроки в параметрах запуска повторяются.';
		if (error) return errorFeature(interaction, error);

		players[author.username] = new Player(author);
		const roomId = uuidv4();
		global.rooms[roomId] = new Room(roomId, players);

		let content = '';
		Object.values(players).forEach(player => (content += `<@${player.user.id}> `));
		await interaction.reply({
			content,
			embeds: [startEmbed(author, Object.values(players))],
			components: [readyComponent(roomId)],
		});

		await timer(15 * 1000);
		const notReadyPlayers: string[] = [];
		Object.values(players).forEach(player => !player.ready && notReadyPlayers.push(player.user.username));
		if (notReadyPlayers.length > 0) {
			await interaction.editReply({
				content: '',
				components: [],
				embeds: [notReadyEmbed(notReadyPlayers)],
			});
			delete global.rooms[roomId];
		}
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while starting the game.'));
	}
};

export { startCommand } from './models';
