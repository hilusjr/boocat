import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import Boocat from './Boocat'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/boocat-panel" element={<Boocat />} />
        </Routes>
      </Router>
      <Outlet />
    </>
  )
}

export default App
