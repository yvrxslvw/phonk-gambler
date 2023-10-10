import { blueBright, greenBright, yellowBright } from 'colorette';
import { BOT_COMMANDS, BOT_DATA, client } from '../../shared';
import { Routes } from 'discord.js';

export const loginClient = async () => {
	try {
		await client.login(BOT_DATA.TOKEN);
		console.log(greenBright(`${blueBright(client.user?.tag!)} has been logged.`));

		console.log(yellowBright('Initializing bot commands...'));
		await client.rest.put(Routes.applicationGuildCommands(BOT_DATA.ID, BOT_DATA.SERVER), { body: BOT_COMMANDS });
		console.log(greenBright(`${blueBright(`${BOT_COMMANDS.length} commands`)} has been initialized.`));
	} catch (error) {
		throw error;
	}
};
