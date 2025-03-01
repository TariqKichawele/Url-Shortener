import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
