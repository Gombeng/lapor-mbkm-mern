import React, { useState } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import { RegisterBg } from '../../assets/Assets';
import { Button, Gap, Input, Message } from '../../components/Components';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
	const navigate = useNavigate();

	const [nim, setNim] = useState('');
	const [fullName, setFullName] = useState('');
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
				'http://localhost:5000/register',
				{
					nim,
					fullName,
					email,
					password,
				},
				config
			);

			console.log(data);
			localStorage.setItem('userInfo', JSON.stringify(data));
			setLoading(false);
			navigate('/login');
		} catch (error) {
			setLoading(false);
			setError(error.response.data.message);
		}
	};

	return (
		<div className="main-login">
			<Helmet>
				<title>Daftar | Lapor MBKM</title>
			</Helmet>
			<div className="left">
				<img src={RegisterBg} alt="background" className="bg" />
			</div>

			<form className="right" onSubmit={submitHandler}>
				<h2 className="mb-1">Silahkan Daftar</h2>

				{error && <Message className="mb-1 error">{error}</Message>}

				<Input
					value={nim}
					onChange={(e) => setNim(e.target.value)}
					label="NIM"
					type="text"
					placeholder="18015520124"
				/>
				<Gap height={20} />

				<Input
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					label="Nama Lengkap"
					type="text"
					placeholder="Syahrizal Ardana"
				/>
				<Gap height={20} />

				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					type="email"
					placeholder="user@gmail.com"
				/>
				<Gap height={20} />

				<Input
					// value={email}
					// onChange={(e) => setEmail(e.target.value)}
					label="Program yang diikuti"
					type="text"
					placeholder="--Pilih program--"
				/>
				<Gap height={20} />

				<Input
					// value={email}
					// onChange={(e) => setEmail(e.target.value)}
					label="Jenis Kelamin"
					type="email"
					placeholder="Laki Laki"
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
						title={loading ? <ClipLoader size={20} /> : 'Daftar'}
						className="button mr-1"
						type="submit"
					/>
					<Button
						title="Masuk"
						className="button outline"
						onClick={() => navigate('/login')}
					/>
				</div>
			</form>
		</div>
	);
};

export default Register;
