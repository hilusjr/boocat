import { useEffect, useState } from 'react'
import Book from './Book'

function DiscoverSection({ genre, isActive }) {
  const [data, setData] = useState('')

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getData = async () => {
    const response = await fetch(
      `http://openlibrary.org/subjects/${genre}.json?&limit=5`
    )
    const fetched = await response.json()
    setData(fetched.works)
  }

  if (!data) return <div></div>
  return (
    <>
      <h2>{genre}</h2>
      <section className="discover-content">
        {data.map((item, i) => (
          <Book
            key={i}
            title={item.title}
            author={item.authors[0].name}
            year={item.first_publish_year}
            cover={item.cover_edition_key}
            isActive={isActive}
          />
        ))}
      </section>
    </>
  )
}

export default DiscoverSection
