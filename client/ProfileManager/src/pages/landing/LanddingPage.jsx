import './LandingPage.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import LoginForm from '../login/LoginForm'
import RegisterForm from '../register/RegisterForm'
const LanddingPage = () => {
	const [isRegistered, setIsRegistered] = useState(true)
	return (
		<main className='lp-main'>
			<img src={logo} alt='' />
			<h1>Assessment</h1>
			<h6>for Ceylon Dazzling Dev Holding Pvt. Ltd.</h6>
			{isRegistered ? <LoginForm /> : <RegisterForm />}
			{isRegistered ? (
				<button
					onClick={(e) => {
						e.preventDefault()
						setIsRegistered(false)
					}}>
					{' '}
					not registered yet?
				</button>
			) : (
				<button
					onClick={(e) => {
						e.preventDefault()
						setIsRegistered(true)
					}}>
					{' '}
					already registered?
				</button>
			)}
		</main>
	)
}

export default LanddingPage
