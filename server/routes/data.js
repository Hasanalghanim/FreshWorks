const express = require('express');
const router = express.Router();

const Duck = require('../models/duckFeedModel');

router.get('/', (req, res) => {
	Duck.findAll().then((data) => {
		res.send(data);
	});
});

router.post('/', (req, res) => {
	const { time, foodType, location, amountOfDucks, amountOfFood } = req.body;
	Duck.create({
		foodType: foodType,
		time: time,
		location: location,
		amountOfDucks: amountOfDucks,
		amountOfFood: amountOfFood,
	});
	res.status(200).send({
		time,
		foodType,
		location,
		amountOfDucks,
		amountOfFood,
	});
});

router.put('/', (req, res) => {});
module.exports = router;
