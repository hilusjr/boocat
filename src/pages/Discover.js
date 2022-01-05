import { useState } from 'react'
import DiscoverDefault from '../components/DiscoverDefault'
import DiscoverSearch from '../components/DiscoverSearch'

function Discover({ isActive }) {
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
    <section
      className="discover page-content"
      style={
        isActive === 'Discover' ? { display: 'block' } : { display: 'none' }
      }
    >
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
        <button onClick={updateSearch} className="search-button">
          SEARCH
        </button>
      </div>
      <DiscoverDefault isSearched={isSearched} isActive={isActive} />
      <DiscoverSearch
        search={search}
        isSearched={isSearched}
        isActive={isActive}
      />
    </section>
  )
}

export default Discover
