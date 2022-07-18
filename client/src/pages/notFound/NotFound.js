import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { NotFoundBg } from '../../assets/Assets';
import { Button } from '../../components/Components';
import './NotFound.scss';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="main-notfound">
			<Helmet>
				<title>Not Found | Lapor MBKM</title>
			</Helmet>
			<h1 className="mb-1">Page Not Found</h1>
			<img className="mb-1" src={NotFoundBg} alt="Page Not Found" />

			<Button
				title="Back to Dashboard"
				className="button notfound"
				onClick={() => navigate('/dashboard')}
			/>
		</div>
	);
};

export default NotFound;
