export * from './commands';
import { InteractionReplyOptions } from 'discord.js';
import { cardsEmbed } from './models';

const embeds = [cardsEmbed];

export const showCards = (): InteractionReplyOptions => {
	return { embeds, ephemeral: true };
};
