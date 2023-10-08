import { Client, GatewayIntentBits } from 'discord.js';
import { BOT_DATA } from './constants';

const bootstrap = async () => {
	const client = new Client({ intents: GatewayIntentBits.MessageContent });
	await client.login(BOT_DATA.TOKEN);
	client.on('ready', () => console.log(`${client.user?.tag} has been logged.`));
};
bootstrap();
