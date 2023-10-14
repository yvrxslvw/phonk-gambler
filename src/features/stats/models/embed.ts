import { EmbedBuilder } from 'discord.js';

export const statsEmbed = (name: string, wins: number, loses: number, blackjacks: number) =>
	new EmbedBuilder({
		title: `Статистика игрока ${name}:`,
		description: `**Побед**: ${wins};\n` + `**Поражений**: ${loses};\n` + `**21 очко**: ${blackjacks}.`,
		color: 0x9b3f4e,
	});
