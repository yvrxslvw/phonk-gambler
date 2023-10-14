import { client } from '../domain';

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;
	const [_, buttonId, extraId] = interaction.customId.match(/^(.*)Button_(.*)$/)!;

	switch (buttonId) {
		case 'gameReady':
			await interaction.reply({ content: `Room ID: ${extraId};` });
			break;
	}
});
