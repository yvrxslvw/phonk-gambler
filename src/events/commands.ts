import { client } from '../config';
import { showHelp, showPong } from '../features';

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const cmd = interaction.commandName;

	switch (cmd) {
		case 'ping':
			await interaction.reply(showPong());
			break;
		case 'help':
			await interaction.reply(showHelp());
			break;
	}
});
