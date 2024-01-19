import { useEffect, useState } from 'react'
import './Header.css'
import profilepic from '../../assets/profileicon.png'
import { useNavigate } from 'react-router-dom'
const Header = () => {
	const [user, setUser] = useState(null)
	const [loggedin, setLoggedin] = useState(false)
	const navigate = useNavigate()
	const checkloggedin = async () => {
		const response = await fetch(
			'http://localhost:3000/api/checkloggedin',
			{
				method: 'GET',
				credentials: 'include',
			},
		)
		if (response.ok === true) {
			const { username, loggedin } = await response.json()
			setUser(username)
			setLoggedin(loggedin)
		}
	}
	useEffect(() => {
		checkloggedin()
	}, [])
	return (
		<section className='top-bar'>
			<img src={profilepic} alt='' />
			{loggedin ? (
				<div>
					<h1>{user}</h1>
					<div>
						<button
							onClick={async (e) => {
								e.preventDefault()
								const response = await fetch(
									'http://localhost:3000/api/logout',
									{
										method: 'GET',
										credentials:
											'include',
									},
								)
								if (response.ok === true) {
									setLoggedin(false)
									setUser('null')
									navigate('/home')
								} else {
									alert('Try again')
								}
							}}>
							logout
						</button>
						<button
							onClick={(e) => {
								e.preventDefault()
								navigate('/home/profile')
							}}>
							view profile
						</button>
						<button
							className='home'
							onClick={(e) => {
								e.preventDefault()
								navigate('/home')
							}}>
							home
						</button>
					</div>
				</div>
			) : (
				<button
					onClick={(e) => {
						e.preventDefault()
						navigate('/')
					}}>
					Login
				</button>
			)}
		</section>
	)
}

export default Header
