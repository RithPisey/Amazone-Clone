import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleChange(e) {
		const { name, value } = e.target;
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	}
	function onSignIn(e) {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((error) => {
				alert(error.message);
			});
	}
	function onRegister(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				console.log(auth);
				alert(auth);

				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => alert(error.message));
	}

	return (
		<div className='login'>
			<img
				className='login_logo'
				src='https://pngimg.com/uploads/amazon/amazon_PNG13.png'
				alt=''
			/>

			<div className='login_container'>
				<h1>Sign-in</h1>
				<form>
					<label htmlFor='uemail'>E-mail</label>
					<br />
					<input
						onChange={handleChange}
						type='text'
						name='email'
						value={email}
						id='uemail'
					/>
					<br />
					<label htmlFor='upassword'>Password</label>
					<br />
					<input
						onChange={handleChange}
						type='password'
						value={password}
						name='password'
						id='upassword'
					/>
					<button
						onClick={onSignIn}
						className='login_signInButton'
						type='submit'
					>
						Sign In
					</button>
				</form>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
					voluptate iure inventore corrupti velit at soluta unde, voluptas cum
					qui a blanditiis sint eaque rem atque impedit et quae culpa!
				</p>
				<button onClick={onRegister} className='login_registerButton'>
					Create your Amazone Account
				</button>
			</div>
		</div>
	);
}

export default Login;
