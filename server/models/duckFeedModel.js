const { Sequelize } = require('sequelize');
const db = require('../config/database');

const DuckFeed = db.define(
	'duckfeed',
	{
		Id: {
			type: Sequelize.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		time: {
			type: Sequelize.STRING(50),
		},
		typeOfFood: {
			type: Sequelize.STRING(50),
		},
		location: {
			type: Sequelize.STRING(50),
		},
		amountOfDucks: {
			type: Sequelize.STRING(50),
		},
		amountOfFood: {
			type: Sequelize.STRING(50),
		},
	},
	{
		tableName: 'Duck Feeds',
	}
);

module.exports = DuckFeed;
