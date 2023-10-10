import './config/dotenv';
import './events';
import { initCommands, loginClient, loginDatabase } from './config';
import { redBright } from 'colorette';

const bootstrap = async () => {
	try {
		await loginDatabase();
		await loginClient();
		await initCommands();
	} catch (error) {
		console.error(error);
		console.error(redBright('The application has not been started.'));
	}
};
bootstrap();
