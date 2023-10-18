import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sql } from '../../domain';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
	declare id: CreationOptional<number>;

	declare name: string;

	declare wins: CreationOptional<number>;

	declare loses: CreationOptional<number>;

	declare blackjacks: CreationOptional<number>;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(64),
			unique: true,
			allowNull: false,
		},
		wins: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		loses: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		blackjacks: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
	},
	{ sequelize: sql, updatedAt: false, modelName: 'User' },
);
