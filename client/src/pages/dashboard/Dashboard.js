import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
	let userName = JSON.parse(localStorage.getItem('userName'));
	return (
		<div>
			<Helmet>
				<title>Dashboard | Lapor MBKM</title>
			</Helmet>
			<div className="card border p-1 mb-1">
				<h2>Selamat datang, {userName}!</h2>
				<p>Jangan lupa isi borangnya hehe!</p>
			</div>

			<h2>Todo</h2>
			<div className="card border p-1 mb-1">
				<li>Isi borang mk 1</li>
				<li>Isi borang mk 2</li>
				<li>Isi borang mk 3</li>
				<li>Isi borang mk 3</li>
				<li>Isi borang mk 3</li>
			</div>
		</div>
	);
};

export default Dashboard;
