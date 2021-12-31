import React from 'react'

function Book({ title, author, year, cover }) {
	// console.log(cover)

	return (
		<div
			className="book-card"
			style={{
				backgroundImage:
					'url(' + `https://covers.openlibrary.org/b/olid/${cover}-L.jpg` + ')',
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% auto',
			}}
		>
			<div className="book-info bg-gradient">
				<div>{title}</div>
				<div>{author}</div>
				<div>{year}</div>
			</div>
		</div>
	)
}

export default Book
