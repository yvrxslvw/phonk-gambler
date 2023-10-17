import { ButtonBuilder, ButtonStyle } from 'discord.js';

export const insuranceButton = (roomId: string) =>
	new ButtonBuilder({
		customId: `gameInsuranceButton_${roomId}`,
		label: 'Страхование',
		style: ButtonStyle.Secondary,
		disabled: true,
	});
