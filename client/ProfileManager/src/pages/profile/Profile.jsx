import './Profile.css'
import { useEffect, useState } from 'react'
const Profile = () => {
	const [username, setUsername] = useState(null)
	const [email, setEmail] = useState(null)
	const [loggedin, setLoggedin] = useState(false)
	const [userid, setUserId] = useState(null)
	const getprofile = async () => {
		const response = await fetch('http://localhost:3000/api/profile', {
			method: 'GET',
			credentials: 'include',
		})
		if (response.ok === true) {
			const { username, loggedin, email, userid } =
				await response.json()
			setUsername(username)
			setEmail(email)
			setLoggedin(loggedin)
			setUserId(userid)
		}
	}
	useEffect(() => {
		getprofile()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<section className='profile'>
			{loggedin ? (
				<div>
					<h3>ID : {userid}</h3>
					<h3>NAME : {username}</h3>
					<h3>EMAIL : {email}</h3>
				</div>
			) : (
				<div>please login to view your details</div>
			)}
		</section>
	)
}

export default Profile
