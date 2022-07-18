import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, useNavigate } from 'react-router-dom';
// import Select from 'react-select';
import styled from 'styled-components';

let options = [
	{
		value: 'adbo',
		label: 'Analisis Desain Berorientasi Objek',
	},
	{
		value: 'pemweb',
		label: 'Pemrograman Website',
	},
];

const IsiBorang = () => {
	let navigate = useNavigate();

	let changeUrl = (e) => {
		navigate(`${e}`);
	};

	return (
		<div>
			<Helmet>
				<title>Isi Borang | Lapor MBKM</title>
			</Helmet>

			<div>
				<FlexBox className="mb-1">
					<h2>Silahkan pilih MK yang akan dikonversi</h2>

					<Container>
						<Select onChange={(e) => changeUrl(e.target.value)}>
							<option value="">Silahkan Pilih MK</option>
							{options.map((option) => (
								<option value={option.value}>{option.label}</option>
							))}
						</Select>
					</Container>
				</FlexBox>

				<hr className="mb-1" />

				<Outlet />
			</div>
		</div>
	);
};

const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Container = styled.div`
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		top: 39%;
		border: 2px solid rgb(0, 0, 0);
		border-left: 0;
		border-bottom: 0;
		left: calc(100% - 2rem);
		/* left: 2rem; */
		transform: rotate(135deg);
	}
`;

const Select = styled.select`
	all: unset;
	background-color: transparent;
	border: 2px solid black;
	border-radius: 0.3rem;
	padding: 1rem 3rem 1rem 1rem;
	cursor: pointer;

	option {
		cursor: pointer;
	}
`;

export default IsiBorang;
