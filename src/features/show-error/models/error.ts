import { EmbedBuilder } from 'discord.js';

export const errorEmbed = new EmbedBuilder({
	title: 'Ошибка',
	description: 'Мяяууу',
	color: 0xff4040,
	footer: { text: 'Сообщение удалится через 10 секунд.' },
});
