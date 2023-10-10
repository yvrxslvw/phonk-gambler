import { Client, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { BOT_DATA } from '../shared';
import { blueBright, greenBright } from 'colorette';

const client = new Client({ intents: BOT_DATA.INTENTS });
const rest = new REST().setToken(BOT_DATA.TOKEN);

export const loginClient = async () => {
	try {
		await rest.put(Routes.applicationCommands(BOT_DATA.ID), { body: {  } });
		await client.login(BOT_DATA.TOKEN);
		console.log(greenBright(`${blueBright(client.user?.tag!)} has been logged.`));
	} catch (error) {
		throw error;
	}
};
