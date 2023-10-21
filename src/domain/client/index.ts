import { Client, Routes } from 'discord.js';
import { blueBright, greenBright, yellowBright } from 'colorette';
import { BOT_DATA } from './data';
import { getCurrentTime } from '../../helpers';
import { Command } from '../command';
import { AppError } from '../../utils';

class Bot extends Client {
	private APP_TOKEN: string;

	private GUILD_ID: string;

	private APP_ID: string;

	constructor({ app_intents: intents, app_token, guild_id, app_id }: typeof BOT_DATA) {
		super({ intents });
		this.APP_TOKEN = app_token;
		this.GUILD_ID = guild_id;
		this.APP_ID = app_id;
	}

	public loginClient = async () => {
		try {
			const runtime = performance.now();
			await this.login(this.APP_TOKEN);
			console.log(
				greenBright(
					`${blueBright(this.user?.tag!)} has been logged. ${yellowBright(
						`(${getCurrentTime(runtime)}s)`,
					)}`,
				),
			);
		} catch (error) {
			await AppError(null, 'login client', error);
		}
	};

	public putCommands = async (commands: Command[]) => {
		try {
			const runtime = performance.now();
			await this.rest.put(Routes.applicationGuildCommands(this.APP_ID, this.GUILD_ID), {
				body: commands,
			});
			console.log(
				greenBright(
					`${blueBright(`${commands.length} commands`)} has been initialized. ${yellowBright(
						`(${getCurrentTime(runtime)}s)`,
					)}`,
				),
			);
		} catch (error) {
			throw error;
		}
	};
}

export const client = new Bot(BOT_DATA);
