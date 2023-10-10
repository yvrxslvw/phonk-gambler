import { blueBright, greenBright } from 'colorette';
import { MYSQL_DATA, sql } from '../../shared';

export const loginDatabase = async () => {
	try {
		await sql.authenticate();
		console.log(greenBright(`Successful connection to the database ${blueBright(MYSQL_DATA.database)}.`));
	} catch (error) {
		throw error;
	}
};
