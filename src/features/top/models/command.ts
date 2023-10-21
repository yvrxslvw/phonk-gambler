import { Command } from '../../../domain';

export const topCommand = new Command('top', 'Показать статистику Сервера', [
	{
		name: 'option',
		description: 'Опция топа',
		type: 3,
		required: true,
		choices: [
			{
				name: 'По победам',
				value: 'wins',
			},
			{
				name: 'По поражениям',
				value: 'loses',
			},
			{
				name: 'По блэкджекам',
				value: 'blackjacks',
			},
		],
	},
]);
