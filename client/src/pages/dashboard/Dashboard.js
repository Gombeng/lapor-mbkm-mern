import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
	return (
		<div>
			<Helmet>
				<title>Dashboard | Lapor MBKM</title>
			</Helmet>
			<div className="card border p1 mb-1">
				<h1>
					Selamat datang, <b>Syahrizal!</b>
				</h1>
				<p>Jangan lupa isi borangnya hehe!</p>
			</div>

			<h2>Todo</h2>
			<div className="card border p1 mb-1">
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
