import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterForm.css'
const RegisterForm = () => {
	const [username, setUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [cpassword, setCpassword] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const navigate = useNavigate()
	return (
		<form className='register-form'>
			<h2>Register New Account</h2>
			<input
				type='text'
				placeholder='Username'
				onChange={(e) => {
					setUsername(e.target.value)
				}}
			/>
			<input
				type='email'
				placeholder='Email'
				onChange={(e) => {
					setEmail(e.target.value)
				}}
			/>
			<input
				type='password'
				placeholder='Password'
				onChange={(e) => {
					setPassword(e.target.value)
				}}
			/>
			<input
				type='password'
				placeholder='Confirm Password'
				onChange={(e) => {
					setCpassword(e.target.value)
				}}
			/>
			<button
				onClick={async (e) => {
					e.preventDefault()
					if (username && email && password) {
						if (password === cpassword) {
							const response = await fetch(
								'http://localhost:3000/api/register',
								{
									method: 'POST',
									body: JSON.stringify({
										username,
										email,
										password,
									}),
									headers: {
										'Content-Type':
											'application/json',
									},
									credentials: 'include',
								},
							)
							if (response.ok === false) {
								if (response.status == 401) {
									setErrorMessage(
										'You are already Registered',
									)
								} else {
									alert(
										'Something went wrong',
									)
								}
							} else {
								navigate('/home')
							}
						} else {
							setErrorMessage(
								'Password confirmation is wrong!',
							)
						}
					} else {
						setErrorMessage(
							'Please fill all the fields!',
						)
					}
				}}>
				Register
			</button>
			<p style={{ color: 'red' }}>{errorMessage || ''}</p>
		</form>
	)
}

export default RegisterForm
