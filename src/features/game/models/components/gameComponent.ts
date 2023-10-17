import { ActionRowBuilder, ButtonBuilder } from 'discord.js';
import { insuranceButton, refuseButton, takeCardButton } from '../buttons';

export const gameComponent = (roomId: string): ActionRowBuilder<ButtonBuilder> =>
	new ActionRowBuilder({
		components: [takeCardButton(roomId), refuseButton(roomId), insuranceButton(roomId)],
	});
