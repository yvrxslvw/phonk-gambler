import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { DOTENV_PATH } from './config';

dotenv.config({ path: DOTENV_PATH });
const bootstrap = async () => {
	const client = new Client({ intents: GatewayIntentBits.MessageContent });
	await client.login(process.env.TOKEN);
	client.on('ready', () => console.log(`${client.user?.tag} has been logged.`));
};
bootstrap();
