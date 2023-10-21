import './config';
import './events';
import { greenBright, yellowBright } from 'colorette';
import { client, sql } from './domain';
import { GameLog, User } from './models';
import {
	cardsCommand,
	helpCommand,
	pingCommand,
	rulesCommand,
	startCommand,
	statsCommand,
	topCommand,
} from './features';
import { getCurrentTime } from './helpers';
import { AppError } from './utils';

const bootstrap = async () => {
	try {
		const runtime = performance.now();
		await client.loginClient();
		await sql.loginDatabase();
		await client.putCommands([
			pingCommand,
			helpCommand,
			rulesCommand,
			cardsCommand,
			statsCommand,
			topCommand,
			startCommand,
		]);
		sql.putModels([User, GameLog]);
		sql.syncModels();
		console.log(
			greenBright(`Application has been started. ${yellowBright(`(${getCurrentTime(runtime)}s)`)}`),
		);
	} catch (error) {
		await AppError(null, 'starting application', error);
		process.exit();
	}
};
bootstrap();

global.rooms = {};
