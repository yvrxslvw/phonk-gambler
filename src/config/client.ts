import { Client } from 'discord.js';
import { BOT_DATA } from '../shared';
import { greenBright } from 'colorette';

const client = new Client({ intents: BOT_DATA.INTENTS });

export const loginClient = async () => {
	try {
		await client.login(BOT_DATA.TOKEN);
		console.log(greenBright(`${client.user?.tag} has been logged.`));
	} catch (error) {
		throw error;
	}
};
