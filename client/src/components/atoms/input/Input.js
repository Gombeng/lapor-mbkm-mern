import React from 'react';
import './Input.scss';
const Input = ({ label, ...rest }) => {
	return (
		<div className="main-input">
			<p className="label">{label}</p>
			<input className="input" {...rest} required />
		</div>
	);
};

export default Input;
