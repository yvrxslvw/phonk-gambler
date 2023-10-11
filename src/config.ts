import dotenv from 'dotenv';
dotenv.config({ path: process.env.APP_MODE === 'development' ? '.env.development' : '.env' });

import { Bot, Sql } from './domain';
import { GatewayIntentBits } from 'discord.js';
import { commands } from './features';

export const client = new Bot({
	TOKEN: process.env.APP_TOKEN!,
	APP_ID: process.env.APP_ID!,
	GUILD_ID: process.env.SERVER_ID!,
	INTENTS: [GatewayIntentBits.MessageContent],
	COMMANDS: commands,
});

export const sql = new Sql(
	process.env.MYSQL_HOST!,
	process.env.MYSQL_USERNAME!,
	process.env.MYSQL_PASSWORD!,
	process.env.MYSQL_DATABASE!,
	process.env.MYSQL_TIMEZONE!,
);
