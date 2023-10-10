import { client } from '../config';
import { BOT_EMBEDS } from '../models/embeds';

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const cmd = interaction.commandName;

	switch (cmd) {
		case 'ping': {
			await interaction.reply({ content: 'Pong!!!' });
			break;
		}
		case 'help': {
			await interaction.reply({ embeds: [BOT_EMBEDS.help] });
			break;
		}
	}
});
