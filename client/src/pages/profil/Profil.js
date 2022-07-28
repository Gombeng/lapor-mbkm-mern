import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Button, Input } from '../../components/Components';

const Profil = () => {
	let userInfo = JSON.parse(localStorage.getItem('userInfo'));
	let editUserInfo = true;
	return (
		<div>
			<Helmet>
				<title>Profil | Lapor MBKM</title>
			</Helmet>
			<h2 className="mb-1">Profil</h2>
			<hr className="mb-1" />

			{editUserInfo ? (
				<Container className="p-1">
					<div>
						<Input
							value={userInfo.nim}
							className="border-1 p-1 mb-1"
							label="NIM"
							type="number"
						/>
						<Input
							value={userInfo.fullName}
							className="border-1 p-1 mb-1"
							label="Nama Lengkap"
							type="text"
						/>
						<Input
							value={userInfo.email}
							className="border-1 p-1 mb-1"
							label="Email"
							type="email"
						/>
					</div>
				</Container>
			) : (
				<Container className="p-1">
					<p>NIM</p>
					<strong>{userInfo.nim}</strong>
					<p>Nama Lengkap</p>
					<strong>{userInfo.fullName}</strong>
					<p>Email</p>
					<strong>{userInfo.email}</strong>
				</Container>
			)}

			<Button
				title="Edit Profil"
				className="button"
				onClick={() => editUserInfo}
			/>
		</div>
	);
};

const Container = styled.div`
	/* max-width: 30rem; */
	/* margin: 0 auto; */
`;

export default Profil;
