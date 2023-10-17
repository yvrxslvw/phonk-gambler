import { ButtonBuilder, ButtonStyle } from 'discord.js';

export const takeCardButton = (roomId: string) =>
	new ButtonBuilder({
		customId: `gameTakeCardButton_${roomId}`,
		label: 'Взять карту',
		style: ButtonStyle.Primary,
		disabled: true,
	});
