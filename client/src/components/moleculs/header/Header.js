import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../assets/Assets';
import { Button } from '../../Components';
import './Header.scss';
import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	align-items: center;
`;

const Header = () => {
	const navigate = useNavigate();

	const logOut = () => {
		let confirmBox = window.confirm('Logout?');
		if (confirmBox) {
			localStorage.clear();
			navigate('/login');
		}
	};

	return (
		<div className="main-header">
			<Flex>
				<img className="mr-1" src={Logo} width={30} alt="Logo" />
				<p>Lapor MBKM</p>
			</Flex>
			<Button title="Logout" className="button link" onClick={logOut} />
		</div>
	);
};

export default Header;
