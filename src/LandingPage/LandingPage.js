import '../LandingPage/LandingPage.css'

function LandingPage() {
	return (
		<div className="container">
			<nav>
				<button>what's boocat</button>
				<button>contact</button>
				<button className="bg-gradient">open panel</button>
			</nav>
			<section className="home-screen">
				<h1 className="text-gradient">Boocat</h1>
				<p>Simple tool to manage your books online.</p>
				<button>Read more</button>
			</section>
		</div>
	)
}

export default LandingPage
