import { client } from '../domain';
import { cardsFeature, helpFeature, pingFeature, rulesFeature, startFeature, statsFeature, topFeature } from '../features';

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const cmd = interaction.commandName;

	switch (cmd) {
		case 'ping':
			await pingFeature(interaction);
			break;
		case 'help':
			await helpFeature(interaction);
			break;
		case 'rules':
			await rulesFeature(interaction);
			break;
		case 'cards':
			await cardsFeature(interaction);
			break;
		case 'stats':
			await statsFeature(interaction);
			break;
		case 'top':
			await topFeature(interaction);
			break;
		case 'start':
			await startFeature(interaction);
			break;
		case 'reset': // !
			global.rooms = {};
			await interaction.reply({ content: 'Очищено.' });
			break;
	}
});
