import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './css/Boocat.css'
import Discover from './pages/Discover'
import MyBooks from './pages/MyBooks'

function Boocat() {
	const [isScrolled, setScrolled] = useState(false)

	const boxShadow = {
		boxShadow: '20rem 0px 10px var(--dark400)',
	}

	window.addEventListener('scroll', () => {
		const offset = window.pageYOffset
		if (offset === 0) {
			setScrolled(false)
			return
		}
		setScrolled(true)
	})

	return (
		<>
			<header style={isScrolled ? boxShadow : { boxShadow: 'none' }}>
				<div></div>
				<span className="text-gradient">boocat</span>
				<div className="user-icon">
					<i className="fa-solid fa-user"></i>
				</div>
			</header>
			<aside>
				<div>Discover</div>
				<div>My books</div>
				<div>Add new book</div>
			</aside>
			<section className="page-content">
				<Router>
					<Routes>
						<Route path="/*" element={<Discover />} />
						<Route path="my-books" element={<MyBooks />} />
					</Routes>
				</Router>
			</section>
		</>
	)
}

export default Boocat
