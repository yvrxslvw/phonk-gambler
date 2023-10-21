import { client } from '../domain';
import {
	gameInsuranceFeature,
	gameReadyFeature,
	gameRefuseFeature,
	gameTakeCardFeature,
} from '../features';
import { AppError } from '../utils';

client.on('interactionCreate', async interaction => {
	try {
		if (!interaction.isButton()) return;
		const [, buttonId, extraId] = interaction.customId.match(/^(.*)Button_(.*)$/)!;

		switch (buttonId) {
			case 'gameReady':
				await gameReadyFeature(interaction, extraId);
				break;
			case 'gameInsurance':
				await gameInsuranceFeature(interaction, extraId);
				break;
			case 'gameRefuse':
				await gameRefuseFeature(interaction, extraId);
				break;
			case 'gameTakeCard':
				await gameTakeCardFeature(interaction, extraId);
				break;
			default:
		}
	} catch (error) {
		await AppError(interaction, 'creating button interaction', error);
	}
});
