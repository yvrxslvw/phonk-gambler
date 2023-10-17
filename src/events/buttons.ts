import { client } from '../domain';
import { readyFeature } from '../features';

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;
	const [_, buttonId, extraId] = interaction.customId.match(/^(.*)Button_(.*)$/)!;

	switch (buttonId) {
		case 'gameReady':
			await readyFeature(interaction, extraId);
			break;
	}
});
