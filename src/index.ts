import { client, sql } from './config';
import './events';

const bootstrap = async () => {
	await sql.login();
	await client.loginClient();
};
bootstrap();
