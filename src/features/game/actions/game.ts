import { ButtonInteraction } from 'discord.js';
import { gameDealing } from '../utils';

export const gameFeature = async (interaction: ButtonInteraction, roomId: string) => {
	await gameDealing(interaction, roomId);
};
