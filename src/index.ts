import './config';
import './events';
import { greenBright, redBright, yellowBright } from 'colorette';
import { client, sql } from './domain';
import { User } from './models';
import { cardsCommand, helpCommand, pingCommand, rulesCommand, startCommand, statsCommand, topCommand } from './features';
import { getCurrentTime } from './helpers';

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
		sql.syncModels([User]);
		console.log(greenBright(`Application has been started. ${yellowBright(`(${getCurrentTime(runtime)}s)`)}`));
	} catch (error) {
		console.error(error);
		console.error(redBright('The application has not been started.'));
		process.exit();
	}
};
bootstrap();
