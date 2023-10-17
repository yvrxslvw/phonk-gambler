import { ButtonBuilder, ButtonStyle } from 'discord.js';

export const refuseButton = (roomId: string, disabled: boolean) =>
	new ButtonBuilder({
		customId: `gameRefuseButton_${roomId}`,
		label: 'Отказ',
		style: ButtonStyle.Danger,
		disabled,
	});
