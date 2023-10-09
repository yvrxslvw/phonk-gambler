import { Sequelize } from 'sequelize';
import { MYSQL_DATA } from '../shared';
import { greenBright } from 'colorette';

const sql = new Sequelize({
	dialect: 'mysql',
	host: MYSQL_DATA.HOST,
	username: MYSQL_DATA.USERNAME,
	password: MYSQL_DATA.PASSWORD,
	database: MYSQL_DATA.DATABASE,
	timezone: MYSQL_DATA.TIMEZONE,
	logging: false,
});

export const loginDatabase = async () => {
	try {
		await sql.authenticate();
		console.log(greenBright(`Successful connection to the database ${MYSQL_DATA.DATABASE}.`));
	} catch (error) {
		throw error;
	}
};
