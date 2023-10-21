import { ButtonInteraction } from 'discord.js';
import { renderInteraction } from './renderInteraction';
import { GameLog, User } from '../../../models';
import { AppError } from '../../../utils';

export const getResults = async (interaction: ButtonInteraction, roomId: string) => {
	try {
		const room = global.rooms[roomId];
		const players = Object.values(room.players);
		const dealerScore = room.dealer.score;
		const render = () => renderInteraction(interaction, roomId);

		room.status = 'Игра окончена.';
		await Promise.all(
			players.map(async player => {
				let user = await User.findOne({ where: { name: player.user.username } });
				if (!user) user = await User.create({ name: player.user.username });
				const playerScore = player.score;
				if (!player.status && !player.insurance) {
					if (dealerScore > 21) player.status = '**Победа**';
					else if (dealerScore <= 21) {
						if (dealerScore > playerScore) player.status = '**Поражение**';
						else if (dealerScore < playerScore) player.status = '**Победа**';
						else if (dealerScore === playerScore) player.status = '**Ничья**';
					}
				} else if (player.insurance) {
					if (room.dealer.cards.length === 2 && dealerScore === 21) player.status = '**Победа**';
					else player.status = '**Поражение**';
				}

				switch (player.status) {
					case '**Блэкджек**':
						await user.update({ blackjacks: user.blackjacks + 1 });
						break;
					case '**Победа**':
						await user.update({ wins: user.wins + 1 });
						break;
					case '**Поражение**':
						await user.update({ loses: user.loses + 1 });
						break;
					default:
				}

				const userCards: string[] = [];
				const dealerCards: string[] = [];

				player.cards.forEach(card => userCards.push(card.getString()));
				room.dealer.cards.forEach(card => dealerCards.push(card.getString()));

				await GameLog.create({
					username: player.user.username,
					userStatus: player.status,
					userCards: userCards.join(' '),
					dealerCards: dealerCards.join(' '),
					userScore: player.score,
					dealerScore: room.dealer.score,
				});
			}),
		);

		await render();
	} catch (error) {
		await AppError(interaction, 'getting game results', error);
	}
};
