import { EmbedBuilder } from 'discord.js';
import { Option } from './option';
import { Top } from './top';

export const topEmbed = (option: Option, top: Top[]) => {
	let stringOption: string;
	switch (option) {
		case 'wins':
			stringOption = 'победам';
			break;
		case 'loses':
			stringOption = 'поражениям';
			break;
		case 'blackjacks':
			stringOption = 'блэкджэкам';
			break;
	}

	let description = '';
	if (top.length > 0) top.forEach(user => (description += `**${user.name}**: ${user.quantity}\n`));
	else description = '**Пока что нет игроков в топе...**';

	return new EmbedBuilder({
		title: `Топ Сервера по ${stringOption}:`,
		description,
		color: 0x9b3f4e,
	});
};
