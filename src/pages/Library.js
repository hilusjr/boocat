function Library({ isActive }) {
  return (
    <section
      className="library page-content"
      style={
        isActive === 'Library' ? { display: 'block' } : { display: 'none' }
      }
    >
      <h1>Library</h1>
      <div>
        <input type="text" className="search-bar" placeholder="Search" />
        <button className="search-button">SEARCH</button>
        <span className="search-bar-span">view:</span>
        <select>
          <option value="0">default</option>
          <option value="1">compact</option>
        </select>
      </div>
      <div className="sort-bar bg-gradient">
        <div>title</div>
        <div>author</div>
        <div>publish year</div>
        <div>possession</div>
      </div>
      <section>books go here</section>
    </section>
  )
}

export default Library
