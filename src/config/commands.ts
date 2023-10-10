import { Routes } from 'discord.js';
import { rest } from './client';
import { BOT_DATA } from '../shared';
import { BOT_COMMANDS } from '../models/commands';
import { blueBright, greenBright, yellowBright } from 'colorette';

export const initCommands = async () => {
	try {
		console.log(yellowBright('Initializing bot commands...'));
		await rest.put(Routes.applicationGuildCommands(BOT_DATA.ID, BOT_DATA.SERVER), { body: BOT_COMMANDS });
		console.log(greenBright(`${blueBright(`${BOT_COMMANDS.length} commands`)} has been initialized.`));
	} catch (error) {
		throw error;
	}
};
