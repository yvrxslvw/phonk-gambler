import { client } from '../config';
import { showCards, showHelp, showPong, showRules } from '../features';

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
		case 'rules':
			await interaction.reply(showRules());
			break;
		case 'cards':
			await interaction.reply(showCards());
			break;
	}
});
