import '../LandingPage/LandingPage.css'
import discoverPreview from '../LandingPage/discover-preview.svg'

function LandingPage() {
	return (
		<>
			<div className="container">
				<nav>
					<button>about</button>
					<button>contact</button>
					<button className="bg-gradient">open panel</button>
				</nav>
				<section className="welcome-screen">
					<div>
						<h1 className="text-gradient">Boocat</h1>
					</div>
					<div>
						<p>Simple tool to manage your books online.</p>
						<button className="button-dark">Read more</button>
					</div>
					<img className="discover-preview" src={discoverPreview} />
				</section>
			</div>
			<div className="container">
				<section className="about-screen">
					<div>
						<h1 className="text-gradient">About</h1>
					</div>
					<div>
						<p>Simple tool to manage your books online.</p>
						<button className="button-dark">Read more</button>
					</div>
					{/* <img className="discover-preview" src={discoverPreview} /> */}
				</section>
			</div>
		</>
	)
}

export default LandingPage
