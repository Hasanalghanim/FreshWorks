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
		time: {
			type: Sequelize.INTEGER(11),
		},
		foodType: {
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		location: {
			type: Sequelize.STRING(50),
			allowNull: false,
		},
		amountOfDucks: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
		},
		amountOfFood: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
		},
	},
	{
		tableName: 'Duck Feeds',
	}
);

module.exports = DuckFeed;
