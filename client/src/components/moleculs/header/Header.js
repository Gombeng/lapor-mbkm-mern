import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components';
import './Header.scss';

const Header = () => {
	const navigate = useNavigate();

	const logOut = () => {
		localStorage.removeItem('userInfo');
		navigate('/login');
	};

	return (
		<div className="main-header">
			<p>Lapor MBKM</p>
			<Button title="Logout" className="button link" onClick={logOut} />
		</div>
	);
};

export default Header;
