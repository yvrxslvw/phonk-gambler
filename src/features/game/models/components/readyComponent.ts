import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const readyComponent = (roomId: string): ActionRowBuilder<ButtonBuilder> =>
	new ActionRowBuilder({
		components: [
			new ButtonBuilder({
				customId: `gameReadyButton_${roomId}`,
				label: 'Готов',
				style: ButtonStyle.Success,
			}),
		],
	});
