import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	let navigate = useNavigate();
	const [ user, setUser ] = useState({ email: '', username: '', number: '' });
	const submitHandler = (e) => {
		e.preventDefault();
		if (user.email.length > 0 && user.password.length > 0 && user.number.length > 0) {
			navigate('/homepage', { replace: true });
		} else {
			return;
		}
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				placeholder="email"
				type="email"
				onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
			/>
			<input
				placeholder="username"
				type="text"
				onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
			/>
			<input
				placeholder="Mobile number"
				type="text"
				onChange={(e) => setUser((prev) => ({ ...prev, number: e.target.value }))}
			/>
			<div>
				<Link to="/login">Login</Link>
			</div>
			<div>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default Signup;
