import { ChatInputCommandInteraction } from 'discord.js';
import { Player, Players } from '../models';

export const initPlayers = (interaction: ChatInputCommandInteraction): Players => {
	const players: Players = {};
	players[interaction.user.username] = new Player(interaction.user);
	interaction.options.data.forEach(option => {
		if (!option.user) return;
		players[option.user.username] = new Player(option.user);
	});
	return players;
};
