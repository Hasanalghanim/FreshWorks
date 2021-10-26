const express = require('express');
const router = express.Router();

const Duck = require('../models/duckFeedModel');
const db = require('../config/database');

// gets all data from DB and sends it as response
router.get('/', (req, res) => {
	Duck.findAll().then((data) => {
		res.send(data);
	});
});

// Take in data from body
// Checks to see if DB is aval. Connects and create with Body Data
// IF DB can not connect sends back STILL 200 but diffrent respoanse
router.post('/', (req, res) => {
	const { date, typeOfFood, location, amountOfDucks, amountOfFood } = req.body;
	db.authenticate()
		.then(() => {
			Duck.create({
				typeOfFood: typeOfFood,
				time: date,
				location: location,
				amountOfDucks: amountOfDucks,
				amountOfFood: amountOfFood,
			}).then(() => res.status(200).send('Data Was Updated'));
		})
		.catch(() => res.status(200).send('something went wrong'));
});
module.exports = router;
