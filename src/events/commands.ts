import { client } from '../domain';
import { cardsFeature, helpFeature, pingFeature, rulesFeature } from '../features';

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
	}
});
