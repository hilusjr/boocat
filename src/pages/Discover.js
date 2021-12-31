import { useState } from 'react'
import '../css/Discover.css'
import DiscoverDefault from '../components/DiscoverDefault'
import DiscoverSearch from '../components/DiscoverSearch'

function Discover() {
	const [searchInput, setSearchInput] = useState('')
	const [search, setSearch] = useState('')
	const KEYCODE_ENTER = 13

	const keyPressHandler = e => {
		if (e.key !== 'Enter') return
		updateSearch()
	}

	const updateSearch = () => {
		setSearch(searchInput)
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
				/>
				<button className="bg-gradient" onClick={updateSearch}>
					SEARCH
				</button>
			</div>
			<DiscoverDefault />
			<DiscoverSearch search={search} />
		</div>
	)
}

export default Discover
