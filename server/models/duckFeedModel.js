const { Sequelize } = require('sequelize');
const db = require('../config/database');

const DuckFeed = db.define(
	'duckfeed',
	{
		Id: {
			type: Sequelize.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		Time: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
		},
		FoodType: {
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		Location: {
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		AmountOfDucks: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
		},
		AmountOfFood: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
		},
	},
	{
		tableName: 'Duck Feeds',
	}
);

module.exports = DuckFeed;
