import { useEffect, useState } from 'react'
import Book from './Book'

function DiscoverSearch({ search, isSearched }) {
	const [data, setData] = useState([])

	useEffect(() => {
		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search])

	const getData = async () => {
		const response = await fetch(
			`http://openlibrary.org/search.json?q=${search}&limit=20`
		)
		const fetched = await response.json()
		setData(fetched.docs)
	}
	// console.log(data)

	return (
		<div style={isSearched ? { display: 'block' } : { display: 'none' }}>
			<h2 className="search-h2">
				Results for: <span>{search}</span>
			</h2>
			<section className="discover-content">
				{data.map((item, i) => (
					<Book
						key={i}
						title={item.title}
						author={item.author_name}
						year={item.first_publish_year}
						cover={item.cover_edition_key}
					/>
				))}
			</section>
		</div>
	)
}

export default DiscoverSearch
