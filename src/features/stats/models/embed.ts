import { EmbedBuilder } from 'discord.js';

export const statsEmbed = (name: string, wins: number, loses: number, blackjacks: number) => {
	const winRate = (wins + blackjacks) / ((wins + blackjacks + loses) / 100);

	return new EmbedBuilder({
		title: `Статистика игрока ${name}:`,
		description:
			`**Побед**: ${wins};\n` +
			`**Поражений**: ${loses};\n` +
			`**Блэкджеков**: ${blackjacks}.\n\n` +
			`**Рейтинг побед**: ${Number.isNaN(winRate) ? '0.00' : winRate.toFixed(2)}%`,
		color: 0x9b3f4e,
	});
};
