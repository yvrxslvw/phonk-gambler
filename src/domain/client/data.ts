import { GatewayIntentBits } from 'discord.js';

export const BOT_DATA = {
	app_intents: [GatewayIntentBits.MessageContent],
	app_token: process.env.APP_TOKEN!,
	guild_id: process.env.SERVER_ID!,
	app_id: process.env.APP_ID!,
};
