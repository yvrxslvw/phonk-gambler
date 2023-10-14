import { Model, Sequelize } from 'sequelize';
import { MYSQL_DATA } from './data';
import { blueBright, greenBright, yellowBright } from 'colorette';
import { getCurrentTime } from '../../helpers';

class Database extends Sequelize {
	private database: string;

	constructor(data: typeof MYSQL_DATA) {
		super({
			dialect: 'mysql',
			...data,
			logging: false,
		});

		this.database = data.database;
	}

	public loginDatabase = async () => {
		try {
			const runtime = performance.now();
			await this.authenticate();
			console.log(
				greenBright(
					`Successful connection to the ${blueBright(this.database)}. ${yellowBright(
						`(${getCurrentTime(runtime)}s)`,
					)}`,
				),
			);
		} catch (error) {
			throw error;
		}
	};

	public syncModels = (models: (typeof Model<any, any>)[]) => {
		const runtime = performance.now();
		models.map(async model => {
			try {
				await model.sync();
			} catch (error) {
				throw error;
			}
		});
		console.log(
			greenBright(
				`${blueBright(`${models.length} models`)} has been synchronized. ${yellowBright(
					`(${getCurrentTime(runtime)}s)`,
				)}`,
			),
		);
	};
}

export const sql = new Database(MYSQL_DATA);
