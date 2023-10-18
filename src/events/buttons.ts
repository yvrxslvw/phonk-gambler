import { client } from '../domain';
import { insuranceFeature, readyFeature, refuseFeature, takeCardFeature } from '../features';

client.on('interactionCreate', async interaction => {
	if (!interaction.isButton()) return;
	const [, buttonId, extraId] = interaction.customId.match(/^(.*)Button_(.*)$/)!;

	switch (buttonId) {
		case 'gameReady':
			await readyFeature(interaction, extraId);
			break;
		case 'gameInsurance':
			await insuranceFeature(interaction, extraId);
			break;
		case 'gameRefuse':
			await refuseFeature(interaction, extraId);
			break;
		case 'gameTakeCard':
			await takeCardFeature(interaction, extraId);
			break;
		default:
	}
});
