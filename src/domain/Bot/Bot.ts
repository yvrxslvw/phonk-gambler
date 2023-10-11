import { blueBright, greenBright, redBright, yellowBright } from 'colorette';
import { Client, Routes } from 'discord.js';
import { BotData } from './BotData';

export class Bot extends Client {
	private botData: BotData;

	constructor(data: BotData) {
		super({ intents: data.INTENTS });
		this.botData = data;
	}

	public loginClient = async () => {
		try {
			await this.login(this.botData.TOKEN);
			console.log(greenBright(`${blueBright(this.user?.tag!)} has been logged.`));

			console.log(yellowBright('Initializing bot commands...'));
			await this.rest.put(Routes.applicationGuildCommands(this.botData.APP_ID, this.botData.GUILD_ID), {
				body: this.botData.COMMANDS,
			});
			console.log(greenBright(`${blueBright(`${this.botData.COMMANDS.length} commands`)} has been initialized.`));
		} catch (error) {
			console.error(error);
			console.error(redBright('Bot has not been logged.'));
		}
	};
}
