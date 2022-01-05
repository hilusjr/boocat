import { Link } from 'react-router-dom'
import boocat from '../boocat.svg'
import '../LandingPage/LandingPage.css'
import AboutCatalog from './AboutCatalog'
import AboutBookat from './AboutBookat'
import AboutBoo from './AboutBoo'
import Welcome from './Welcome'

function LandingPage() {
  return (
    <>
      <nav>
        <img src={boocat} />
        <button>about</button>
        <button>contact</button>
        <Link to="/boocat-panel">
          <button className="bg-gradient">open panel</button>
        </Link>
      </nav>

      <Welcome />
      <AboutCatalog />
      <AboutBookat />
      <AboutBoo />
    </>
  )
}

export default LandingPage
