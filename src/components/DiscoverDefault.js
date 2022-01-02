import DiscoverSection from './DiscoverSection'

function DiscoverDefault({ isSearched }) {
	const genres = ['horror', 'thriller', 'love']

	return (
		<div style={!isSearched ? { display: 'block' } : { display: 'none' }}>
			{genres.map(genre => (
				<DiscoverSection key={genre} genre={genre} />
			))}
		</div>
	)
}

export default DiscoverDefault
