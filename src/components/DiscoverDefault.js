import Book from './Book'
import { useEffect, useState } from 'react'

function DiscoverDefault() {
	const [love, setLove] = useState('')
	const [thriller, setThriller] = useState('')

	useEffect(() => {
		getData()
		getThriller()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getData = async () => {
		const response = await fetch(
			`http://openlibrary.org/subjects/horror.json?&limit=5`
		)
		const fetched = await response.json()
		setLove(fetched.works)
	}
	console.log(love)

	const getThriller = async () => {
		const response = await fetch(
			`http://openlibrary.org/subjects/thriller.json?&limit=5`
		)
		const fetched = await response.json()
		setThriller(fetched.works)
	}
	console.log(thriller)

	if (!love || !thriller) return <div></div>
	return (
		<>
			<h2>Horror</h2>
			<section className="discover-content">
				{love.map((item, i) => (
					<Book
						key={i}
						title={item.title}
						author={item.authors[0].name}
						year={item.first_publish_year}
						cover={item.cover_edition_key}
					/>
				))}
			</section>
			<h2>Thriller</h2>
			<section className="discover-content">
				{thriller.map((item, i) => (
					<Book
						key={i}
						title={item.title}
						author={item.authors[0].name}
						year={item.first_publish_year}
						cover={item.cover_edition_key}
					/>
				))}
			</section>
		</>
	)
}

export default DiscoverDefault
