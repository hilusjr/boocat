import React from 'react'

function Library({ isActive }) {
  return (
    <section
      className="page-content"
      style={
        isActive === 'Library' ? { display: 'block' } : { display: 'none' }
      }
    >
      <div>this is library</div>
    </section>
  )
}

export default Library
