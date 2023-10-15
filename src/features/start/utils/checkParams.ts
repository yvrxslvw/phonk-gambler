import { duplicates } from '../../../helpers';
import { Players } from '../models';

export const checkParams = (players: Players): string => {
	let error = '';
	Object.values(players).forEach(player => {
		if (player.user.bot) error = 'Некоторые из выбранных игроков являются ботами.';
		Object.values(global.rooms).forEach(room =>
			Object.keys(room.players).forEach(playerName => {
				if (playerName === player.user.username) error = 'Некоторые из выбранных игроков уже находятся в другой игре.';
			}),
		);
	});
	if (duplicates(Object.keys(players))) error = 'Некоторые из выбранных игроков повторяются.';
	return error;
};
