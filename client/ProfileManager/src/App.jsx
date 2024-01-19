import { Route, Routes } from 'react-router-dom'
import LanddingPage from './pages/landing/LanddingPage'
import HomePage from './pages/home/HomePage'
import Profile from './pages/profile/Profile'
import Body from './pages/home/Body'
function App() {
	return (
		<Routes>
			<Route index element={<LanddingPage />} />
			<Route path='/home' element={<HomePage />}>
				<Route index element={<Body />} />
				<Route path='/home/profile' element={<Profile />} />
			</Route>
		</Routes>
	)
}

export default App
