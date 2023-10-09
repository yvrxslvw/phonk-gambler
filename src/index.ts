import './config';
import './events';

import { BOT_DATA } from './shared';
import { client } from './config';

const bootstrap = async () => {
	try {
		await client.login(BOT_DATA.TOKEN);
	} catch (error) {
		console.error(error);
	}
};
bootstrap();
