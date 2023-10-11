import { blueBright, greenBright, redBright } from 'colorette';
import { Sequelize } from 'sequelize';

export class Sql extends Sequelize {
	private database: string;

	constructor(host: string, username: string, password: string, database: string, timezone: string) {
		super({ dialect: 'mysql', host, username, password, database, timezone, logging: false });
		this.database = database;
	}

	public login = async () => {
		try {
			await this.authenticate();
			console.log(greenBright(`Successful connection to the database ${blueBright(this.database)}.`));
		} catch (error) {
			console.error(error);
			console.error(redBright('Failed database connection.'));
		}
	};
}
