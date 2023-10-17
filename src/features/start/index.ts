import { redBright } from 'colorette';
import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';
import { timer } from '../../helpers';
import { errorFeature } from '../error';
import { checkNotReady, checkParams, initPlayers, startGame } from './utils';
import { startEmbed } from './models';

export const startFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		const roomId = uuidv4();
		const players = initPlayers(interaction);
		let error = checkParams(players);
		if (error) return errorFeature(interaction, error);

		await startGame(interaction, players, roomId);
		await timer(15 * 1000);
		await checkNotReady(interaction, players, roomId);
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while starting the game.'));
	}
};

export const readyFeature = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		global.rooms[roomId].players[interaction.user.username].ready = true;
		await interaction.update({ embeds: [startEmbed(Object.values(global.rooms[roomId].players))] });
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while ready in the game.'));
	}
};

export { startCommand } from './models';
