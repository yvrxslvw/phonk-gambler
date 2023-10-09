import { Sequelize } from 'sequelize';
import { MYSQL_DATA } from '../shared';

export const sql = new Sequelize({
	dialect: 'mysql',
	host: MYSQL_DATA.HOST,
	username: MYSQL_DATA.USERNAME,
	password: MYSQL_DATA.PASSWORD,
	database: MYSQL_DATA.DATABASE,
	timezone: MYSQL_DATA.TIMEZONE,
	// logging: false,
});
