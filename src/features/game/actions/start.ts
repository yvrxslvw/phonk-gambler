import { ChatInputCommandInteraction } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';
import { AppError, timer } from '../../../utils';
import { errorFeature } from '../../error';
import { checkNotReady, checkParams, initPlayers, startGame } from '../utils';

export const gameStartFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		const roomId = uuidv4();
		const players = initPlayers(interaction);
		const error = checkParams(players);
		if (error) {
			errorFeature(interaction, error);
			return;
		}

		await startGame(interaction, players, roomId);
		await timer(15 * 1000);
		await checkNotReady(interaction, players, roomId);
	} catch (error) {
		await AppError(interaction, 'executing start command feature', error);
	}
};
