import { redBright } from 'colorette';
import { loginClient, loginDatabase } from './providers';

const bootstrap = async () => {
	try {
		await loginDatabase();
		await loginClient();
	} catch (error) {
		console.error(error);
		console.error(redBright('The application has not been started.'));
	}
};
bootstrap();
