import { Client, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { BOT_DATA } from '../shared';
import { blueBright, greenBright } from 'colorette';

export const client = new Client({ intents: BOT_DATA.INTENTS });
export const rest = new REST().setToken(BOT_DATA.TOKEN);

export const loginClient = async () => {
	try {
		await client.login(BOT_DATA.TOKEN);
		console.log(greenBright(`${blueBright(client.user?.tag!)} has been logged.`));
	} catch (error) {
		throw error;
	}
};
