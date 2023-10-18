import { Model, Sequelize } from 'sequelize';
import { blueBright, greenBright, yellowBright } from 'colorette';
import { MYSQL_DATA } from './data';
import { getCurrentTime } from '../../helpers';

class Database extends Sequelize {
	private database: string;

	private appModels: (typeof Model<any, any>)[];

	constructor(data: typeof MYSQL_DATA) {
		super({
			dialect: 'mysql',
			...data,
			logging: false,
		});

		this.database = data.database;
		this.appModels = [];
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

	public putModels = (models: (typeof Model<any, any>)[]) => {
		this.appModels = models;
	};

	public syncModels = () => {
		const runtime = performance.now();

		this.appModels.map(async model => {
			try {
				await model.sync();
			} catch (error) {
				throw error;
			}
		});

		console.log(
			greenBright(
				`${blueBright(`${this.appModels.length} models`)} has been synchronized. ${yellowBright(
					`(${getCurrentTime(runtime)}s)`,
				)}`,
			),
		);
	};
}

export const sql = new Database(MYSQL_DATA);
