const express = require('express');
const router = express.Router();

const Duck = require('../models/duckFeedModel');

router.get('/', (req, res) => {
	Duck.findAll().then((data) => {
		res.send(data);
	});
});

router.post('/', (req, res) => {
	const { time, typeOfFood, location, amountOfDucks, amountOfFood } = req.body;
	Duck.create({
		typeOfFood: typeOfFood,
		time: time,
		location: location,
		amountOfDucks: amountOfDucks,
		amountOfFood: amountOfFood,
	});
	res.status(200).send({
		time,
		typeOfFood,
		location,
		amountOfDucks,
		amountOfFood,
	});
});

router.put('/', (req, res) => {});
module.exports = router;
