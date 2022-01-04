import boocat from '../boocat.svg'
import '../LandingPage/LandingPage.css'
import AboutCatalog from './AboutCatalog'
import AboutBookat from './AboutBookat'
import AboutBoo from './AboutBoo'
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
			<AboutCatalog />
			<AboutBookat />
			<AboutBoo />
		</>
	)
}

export default LandingPage
