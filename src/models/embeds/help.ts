import { EmbedBuilder } from 'discord.js';
import { APP_VERSION } from '../../shared';

export const help = new EmbedBuilder({
	author: {
		name: `Author: yvrxslvw. v${APP_VERSION}`,
		url: 'https://t.me/yvrxslw',
	},
	title: 'Помощь по боту:',
	description:
		'Данный бот предоставляет Вам возможность поиграть в карточную игру BlackJack со своими друзьями!\n' +
		'Можно играть в одиночку или со своими друзьями до 5 человек в одной комнате!\n\n' +
		'**Доступные команды:**\n' +
		':large_orange_diamond: `/start` начать игру соло или с выбранными людьми.\n' +
		':large_orange_diamond: `/rules` посмотреть правила игры.\n' +
		':large_orange_diamond: `/cards` посмотреть значения карт.\n' +
		':large_orange_diamond: `/stats` посмотреть свою статистику.\n' +
		':large_orange_diamond: `/top` посмотреть топ Сервера.\n',
	footer: { text: 'Good luck, have fun.' },
	color: 0x9b3f4e,
});
