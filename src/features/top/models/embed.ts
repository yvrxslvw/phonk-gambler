import { EmbedBuilder } from 'discord.js';
import { Option } from './option';
import { Top } from './top';

export const topEmbed = (option: Option, top: Top[]) => {
	let stringOption: string = '';
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
		default:
	}

	let description = '';
	if (top.length > 0) {
		top.forEach((user, index) => {
			description += `${index + 1}. ${user.name}: ${user.quantity} (WR: ${
				Number.isNaN(user.winRate) ? '0.00' : user.winRate.toFixed(2)
			}%)\n`;
		});
	} else description = '**Пока что нет игроков в топе...**';

	return new EmbedBuilder({
		title: `Топ Сервера по ${stringOption}:`,
		description,
		color: 0x9b3f4e,
	});
};
