import { Client, GatewayIntentBits } from 'discord.js';

export const BOT_DATA = {
	TOKEN: process.env.APP_TOKEN!,
	ID: process.env.APP_ID!,
	SERVER: process.env.SERVER_ID!,
	INTENTS: [GatewayIntentBits.MessageContent]!,
};

export const client = new Client({ intents: BOT_DATA.INTENTS });
