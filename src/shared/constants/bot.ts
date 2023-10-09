import { GatewayIntentBits } from 'discord.js';

export const BOT_DATA = {
	TOKEN: process.env.APP_TOKEN,
	ID: Number(process.env.APP_ID),
	SERVER: Number(process.env.SERVER_ID),
	INTENTS: [GatewayIntentBits.MessageContent],
};
