import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom'
import './css/Boocat.css'
import Discover from './pages/Discover'
import MyBooks from './pages/MyBooks'

function Boocat() {
	return (
		<>
			<header>
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
