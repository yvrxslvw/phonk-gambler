import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from 'sequelize';
import { sql } from '../../domain';

export class GameLog extends Model<InferAttributes<GameLog>, InferCreationAttributes<GameLog>> {
	declare id: CreationOptional<number>;

	declare username: string;

	declare userStatus: string;

	declare userCards: string;

	declare dealerCards: string;

	declare userScore: number;

	declare dealerScore: number;

	declare createdAt: CreationOptional<Date>;
}

GameLog.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			unique: true,
		},
		username: {
			type: DataTypes.STRING(64),
			allowNull: false,
		},
		userStatus: {
			type: DataTypes.STRING(16),
			allowNull: false,
		},
		userCards: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		dealerCards: {
			type: DataTypes.STRING(128),
			allowNull: false,
		},
		userScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		dealerScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		createdAt: DataTypes.DATE,
	},
	{ sequelize: sql, updatedAt: false, modelName: 'gameLog' },
);
