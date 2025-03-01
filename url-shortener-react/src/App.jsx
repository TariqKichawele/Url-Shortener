import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
