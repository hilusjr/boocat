import { useState } from 'react'
import discoverPreview from '../LandingPage/discover-preview.svg'

function Welcome() {
	const [offset, setOffset] = useState(0)
	window.addEventListener('scroll', () => {
		const offsetTop = window.pageYOffset
		if (offsetTop > window.innerHeight) return
		setOffset(offsetTop)
	})

	return (
		<section className="welcome-screen container">
			<div>
				<h1 className="text-gradient">boocat</h1>
			</div>
			<div>
				<p>Simple tool to manage your books online.</p>
				<button className="button-dark">Read more</button>
			</div>
			<img
				className="discover-preview"
				src={discoverPreview}
				style={{
					transform: `translate(${-10 + offset / 100}%, 20%) rotate3d(${4 - offset / 500}, ${-3 + offset / 300}, ${
						0.5 - offset / 2000
					}, 45deg) scale(1.2)`,
				}}
			/>
		</section>
	)
}

export default Welcome
