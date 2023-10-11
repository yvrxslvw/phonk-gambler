import { GatewayIntentBits } from 'discord.js';
import { Command } from '../../models/Command';

export interface BotData {
	TOKEN: string;
	APP_ID: string;
	GUILD_ID: string;
	INTENTS: GatewayIntentBits[];
	COMMANDS: Command[];
}
