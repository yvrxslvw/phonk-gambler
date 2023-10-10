import dotenv from 'dotenv';
dotenv.config({ path: process.env.APP_MODE === 'development' ? '.env.development' : '.env' });
import { loginClient, loginDatabase } from './config';
import { redBright } from 'colorette';

const bootstrap = async () => {
	try {
		await loginDatabase();
		await loginClient();
	} catch (error) {
		console.error(redBright('The application has not been started.'));
		console.error(error);
	}
};
bootstrap();
