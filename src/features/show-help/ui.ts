import { InteractionReplyOptions } from 'discord.js';
import { helpEmbed } from './models';

const embeds = [helpEmbed];

export const showHelp = (): InteractionReplyOptions => {
	return { embeds };
};
