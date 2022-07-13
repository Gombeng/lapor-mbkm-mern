require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Routes = require('./src/routes/Routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(Routes);
const PORT = process.env.PORT || 5000;

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(process.env.DB, connectionParams)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`=> Database Connected 🏃💨`);
			console.log(`=> Server running on localhost:${PORT} 🏃💨`);
		});

		app.get('/', (req, res) => {
			res.send(`Hello World! Current Port : ${PORT} 🏃💨`);
		});
	})
	.catch((err) => console.log('error => ', err));
