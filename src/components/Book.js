import React from 'react'

function Book({ title, author, year, cover, isActive }) {
  return (
    <div
      className="book-card"
      style={{
        backgroundImage:
          'url(' + `https://covers.openlibrary.org/b/olid/${cover}-L.jpg` + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className="book-info">
        <div>{title}</div>
        <div>{author}</div>
        <div>{year}</div>
      </div>
      <div className="book-options-menu">
        <div
          style={
            isActive === 'Discover' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <i className="fa-solid fa-plus"></i>
          <span>add to library</span>
        </div>
        <div
          style={
            isActive === 'Discover' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <i className="fa-regular fa-star"></i>
          <span>add to wish list</span>
        </div>
        <div
          style={
            isActive === 'Library' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <i className="fa-regular fa-star"></i>
          <span>add to favorites</span>
        </div>
        <div
          style={
            isActive === 'Library' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <i className="fa-regular fa-star"></i>
          <span>mark as lent</span>
        </div>
        <div
          style={
            isActive === 'Library' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <i className="fa-regular fa-star"></i>
          <span>mark as borrowed</span>
        </div>
        <div
          style={
            isActive === 'Library' ? { display: 'flex' } : { display: 'none' }
          }
        >
          <i className="fa-solid fa-xmark"></i>
          <span>remove from library</span>
        </div>
      </div>
    </div>
  )
}

export default Book
