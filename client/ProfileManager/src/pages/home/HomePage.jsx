import { Outlet } from 'react-router-dom'
import Header from './Header'
import './HomePage.css'

const HomePage = () => {
	return (
		<main className='home'>
			<Header />
			<Outlet />
		</main>
	)
}

export default HomePage
