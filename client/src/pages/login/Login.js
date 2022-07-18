import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import './Login.scss';
import { LoginBg } from '../../assets/Assets';
import { Button, Gap, Input, Message } from '../../components/Components';

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo');

		if (userInfo) {
			navigate('/');
		}
	}, [navigate]);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const config = {
				headers: {
					'Content-type': 'application/json',
				},
			};

			setLoading(true);

			const { data } = await axios.post(
				'http://localhost:5000/login',
				{
					email,
					password,
				},
				config
			);

			console.log(data);

			localStorage.setItem('userInfo', JSON.stringify(data));
			localStorage.setItem('userName', JSON.stringify(data.fullName));
			setLoading(false);
			navigate('/dashboard');
		} catch (error) {
			setLoading(false);
			console.log(error.response);
			setError(error.response.data.message);
		}
	};

	return (
		<div className="main-login">
			<Helmet>
				<title>Masuk | Lapor MBKM</title>
			</Helmet>
			<div className="left">
				<img src={LoginBg} alt="background" className="bg" />
			</div>

			<form className="right" onSubmit={submitHandler}>
				<h2 className="mb-1">Silahkan Masuk</h2>

				{error && <Message className="mb-1 error">{error}</Message>}

				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					type="email"
					placeholder="user@gmail.com"
				/>
				<Gap height={20} />

				<Input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Kata Sandi"
					type="password"
					placeholder="********"
				/>
				<Gap height={20} />

				<div>
					<Button
						title={loading ? <ClipLoader size={20} /> : 'Masuk'}
						className="button mr-1"
						type="submit"
					/>
					<Button
						title="Daftar"
						className="button outline"
						onClick={() => navigate('/register')}
					/>
				</div>
			</form>
		</div>
	);
};

export default Login;
