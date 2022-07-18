const express = require('express');
const { registerUser, loginUser } = require('../controllers/User.controller');
const app = express();

// user routes
app.post('/register', registerUser, (err, req, res, next) => {
	res.status(400).send({ message: err.message });
	res.status(404).send({ message: err.message });
});
app.post('/login', loginUser, (err, req, res, next) => {
	res.status(401).send({ message: err.message });
	res.status(500).send({ message: err.message });
});

module.exports = app;
