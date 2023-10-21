import { Command } from '../../../domain';

export const startCommand = new Command('start', 'Начать игру', [
	{
		name: 'second',
		description: 'Второй игрок',
		required: false,
		type: 6,
	},
	{
		name: 'third',
		description: 'Третий игрок',
		required: false,
		type: 6,
	},
	{
		name: 'fourth',
		description: 'Четвёртый игрок',
		required: false,
		type: 6,
	},
	{
		name: 'fifth',
		description: 'Пятый игрок',
		required: false,
		type: 6,
	},
]);
