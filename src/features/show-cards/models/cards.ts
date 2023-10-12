import { EmbedBuilder } from 'discord.js';

export const cardsEmbed = new EmbedBuilder({
	title: 'Значения карт по очкам:',
	description:
		'**Туз** = 11 **если сумма карт игрока + 11 меньше либо равно 21**;\n' +
		'**Туз** = 1 **если сумма карт игрока + 11 больше 21**;\n' +
		'**Король, Дама, Валет** = 10;\n' +
		'**Карты от 2 до 10** = значению карты.',
	color: 0x9b3f4e,
	footer: { text: 'Good luck, have fun.' },
});
