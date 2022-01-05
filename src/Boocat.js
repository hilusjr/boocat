import { useState } from 'react'
import './css/Boocat.css'
import './css/ContentPages.css'
import Discover from './pages/Discover'
import Library from './pages/Library'

export default function Boocat() {
  const [isScrolled, setScrolled] = useState(false)
  const [isActive, setActive] = useState('Library')

  const boxShadow = {
    boxShadow: '20rem 0px 10px var(--dark400)',
  }

  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset
    if (offset === 0) {
      setScrolled(false)
      return
    }
    setScrolled(true)
  })

  const activateButton = e => {
    setActive(e.target.innerText)
  }

  return (
    <>
      <header style={isScrolled ? boxShadow : { boxShadow: 'none' }}>
        <div></div>
        <span className="text-gradient">boocat</span>
        <div className="user-icon">
          <i className="fa-solid fa-user"></i>
        </div>
      </header>
      <aside>
        <div onClick={activateButton}>Discover</div>
        <div onClick={activateButton}>Library</div>
        <div>Add new book</div>
      </aside>
      <Discover isActive={isActive} />
      <Library isActive={isActive} />
    </>
  )
}
