import { redBright } from 'colorette';
import { Interaction } from 'discord.js';

export const AppError = async (
	interaction: Interaction | null,
	where: string,
	error: unknown,
): Promise<void> => {
	console.error(error);
	console.error(redBright(`An error occurred while ${where}.`));
	if (
		(interaction && interaction.isChatInputCommand()) ||
		(interaction && interaction?.isButton())
	) {
		await interaction.reply({ content: 'Произошла внутренняя ошибка приложения... :(' });
	}
};
