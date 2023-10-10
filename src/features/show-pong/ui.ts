import { InteractionReplyOptions } from 'discord.js';

const content = 'Pong!!!';

export const showPong = (): InteractionReplyOptions => {
	return { content };
};
