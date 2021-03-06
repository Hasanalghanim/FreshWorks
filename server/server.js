require('dotenv').config();
const express = require('express');
const dataRouter = require('./routes/data');
const cors = require('cors');
const app = express();

// database
const db = require('./config/database');

// Test DB
db.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch((err) => console.error('Unable to connect to the database:', err));

// Syncs models to database
db.sync({ alter: true });

// Body parser middlewares
app.use(express.json());

//Allows All requestcoming from LH or APP_URL
app.use(
	cors({
		origin: ['http://localhost:3000', process.env.APP_URL],
		credentials: true,
	})
);

app.get('/', (req, res) => {
	res.send('Ducks API index Page');
});

app.use('/data', dataRouter);

// Run sevrer
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
