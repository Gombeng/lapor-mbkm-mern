import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components/Components';
import './MainApp.scss';

const MainApp = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const userInfo = localStorage.getItem('userInfo');

		if (!userInfo) {
			navigate('/login');
		}
	}, [navigate]);

	return (
		<div>
			<Header />
			<div className="main-app">
				<div className="sidenav">
					<Link className="link" to="dashboard">
						Dashboard
					</Link>
					<Link className="link" to="isi-borang">
						Isi borang
					</Link>
					<Link className="link" to="logsheet">
						Logsheet
					</Link>
				</div>

				<div className="content">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MainApp;
