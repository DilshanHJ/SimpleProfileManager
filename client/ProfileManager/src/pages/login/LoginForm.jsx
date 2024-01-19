import { useState } from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)

	const navigate = useNavigate()
	return (
		<form className='login-form'>
			<h2>Login to Your Account</h2>
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
			<button
				onClick={async (e) => {
					e.preventDefault()
					const response = await fetch(
						'http://localhost:3000/api/login',
						{
							method: 'POST',
							body: JSON.stringify({
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
						alert('unsuccessfull')
					} else {
						navigate('/home')
					}
				}}>
				{' '}
				Login{' '}
			</button>
		</form>
	)
}

export default LoginForm
