import { useState } from 'react'
import '../css/Discover.css'
import DiscoverDefault from '../components/DiscoverDefault'
import DiscoverSearch from '../components/DiscoverSearch'

function Discover() {
	const [searchInput, setSearchInput] = useState('')
	const [search, setSearch] = useState('')
	const [isSearched, setIsSearched] = useState(false)

	const keyPressHandler = e => {
		if (e.key === 'Backspace' && searchInput.length === 0) {
			setIsSearched(false)
			return
		}
		if (e.key !== 'Enter') return
		updateSearch()
	}

	const updateSearch = () => {
		if (searchInput.length === 0) return
		setSearch(searchInput)
		setIsSearched(true)
	}

	return (
		<div className="discover">
			<div className="discover-header">
				<h1>Discover</h1>
				<input
					type="text"
					className="search-bar"
					placeholder="Search"
					onChange={e => setSearchInput(e.target.value)}
					onKeyPress={keyPressHandler}
					onKeyUp={keyPressHandler}
				/>
				<button onClick={updateSearch}>SEARCH</button>
			</div>
			<DiscoverDefault isSearched={isSearched} />
			<DiscoverSearch search={search} isSearched={isSearched} />
		</div>
	)
}

export default Discover
