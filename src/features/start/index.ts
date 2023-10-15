import { redBright } from 'colorette';
import { ChatInputCommandInteraction } from 'discord.js';
import { readyComponent, startEmbed } from './models';
import { v4 as uuidv4 } from 'uuid';
import { Player, Room } from '../../models';

export const startFeature = async (interaction: ChatInputCommandInteraction) => {
	try {
		const author = interaction.user;
		const players = interaction.options.data.map(option => new Player(option.user!));
		players.push(new Player(author));

		// * Some features...

		const roomId = uuidv4();
		global.rooms[roomId] = new Room(players);

		let content = '';
		players.forEach(player => (content += `<@${player.user.id}> `));
		const embeds = [startEmbed(author, players)];
		const components = [readyComponent(roomId)];

		await interaction.reply({ content, embeds, components });
	} catch (error) {
		console.error(error);
		console.error(redBright('Error while starting the game.'));
	}
};

export { startCommand } from './models';
