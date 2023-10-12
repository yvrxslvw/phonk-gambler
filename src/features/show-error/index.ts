import { InteractionReplyOptions } from 'discord.js';
import { errorEmbed } from './models';

const embeds = [errorEmbed];

export const showError = (message: string): InteractionReplyOptions => {
	embeds[0].setDescription(message);
	return { embeds };
};
