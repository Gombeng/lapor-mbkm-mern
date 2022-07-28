const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken.js');
const User = require('../models/User.model');

// create new user
const registerUser = asyncHandler(async (request, response) => {
	const { nim, fullName, email, password } = request.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		response.status(404);
		throw new Error('Email sudah digunakan pengguna lain!');
	}

	const user = await User.create({
		nim,
		fullName,
		email,
		password,
	});

	if (user) {
		response.status(201).json({
			_id: user._id,
			nim: user.nim,
			fullName: user.fullName,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		response.status(400);
		throw new Error('Kesalahan Pengguna');
	}
});

// user login
const loginUser = asyncHandler(async (request, response) => {
	const { email, password } = request.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		response.json({
			_id: user._id,
			nim: user.nim,
			fullName: user.fullName,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		response.status(401);
		throw new Error('Email atau kata sandi salah!');
	}
});

// edit exist user
const updateUserProfile = asyncHandler(async (request, response) => {
	const user = await User.findById(request.user._id);

	if (user) {
		user.fullName = request.body.fullName || user.fullName;
		user.email = request.body.email || user.email;
		if (request.body.password) {
			user.password = request.body.password;
		}

		const updatedUser = await user.save();

		response.json({
			_id: updatedUser._id,
			fullName: updatedUser.fullName,
			email: updatedUser.email,
			token: generateToken(updatedUser._id),
		});
	} else {
		response.status(404);
		throw new Error('Pengguna tidak ditemukan!');
	}
});

module.exports = { registerUser, loginUser, updateUserProfile };
