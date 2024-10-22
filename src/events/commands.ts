import { client } from '../domain';
import {
	cardsFeature,
	helpFeature,
	pingFeature,
	rulesFeature,
	gameStartFeature,
	statsFeature,
	topFeature,
} from '../features';
import { AppError } from '../utils';

client.on('interactionCreate', async interaction => {
	try {
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
				await gameStartFeature(interaction);
				break;
			default:
		}
	} catch (error) {
		await AppError(interaction, 'creating command interaction', error);
	}
});
