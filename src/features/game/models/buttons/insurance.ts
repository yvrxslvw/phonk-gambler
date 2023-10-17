import { ButtonBuilder, ButtonStyle } from 'discord.js';

export const insuranceButton = (roomId: string, disabled: boolean) =>
	new ButtonBuilder({
		customId: `gameInsuranceButton_${roomId}`,
		label: 'Страхование',
		style: ButtonStyle.Secondary,
		disabled,
	});
