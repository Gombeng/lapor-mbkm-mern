import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
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
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="dashboard"
					>
						Dashboard
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="isi-borang"
					>
						Isi borang
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="logsheet"
					>
						Logsheet
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="profil"
					>
						Profil
					</NavLink>
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
