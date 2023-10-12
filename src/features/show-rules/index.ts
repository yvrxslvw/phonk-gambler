export * from './commands';
import { InteractionReplyOptions } from 'discord.js';
import { rulesEmbed } from './models';

const embeds = [rulesEmbed];

export const showRules = (): InteractionReplyOptions => {
	return { embeds, ephemeral: true };
};
