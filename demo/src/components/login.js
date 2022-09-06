import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	let navigate = useNavigate();
	const [ user, setUser ] = useState({ email: '', password: '' });
	const submitHandler = (e) => {
		e.preventDefault();
		if (user.email.length > 0 && user.password.length > 0) {
			navigate('/homepage', { replace: true });
		} else {
			return;
		}
	};

	return (
		<Fragment>
			<form onSubmit={submitHandler}>
				<input
					placeholder="email"
					type="email"
					onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
				/>
				<input
					placeholder="password"
					type="password"
					onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
				/>
				<div>
					<Link to="">Forgot password</Link>
					<Link to="/signup" style={{ marginLeft: '10px' }}>
						Signup
					</Link>
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</Fragment>
	);
};

export default Login;
