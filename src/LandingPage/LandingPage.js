import boocat from '../boocat.svg'
import '../LandingPage/LandingPage.css'
import About from './About'
import Welcome from './Welcome'

function LandingPage() {
	return (
		<>
			<nav>
				<img src={boocat} />
				<button>about</button>
				<button>contact</button>
				<button className="bg-gradient">open panel</button>
			</nav>

			<Welcome />
			<About />
		</>
	)
}

export default LandingPage
