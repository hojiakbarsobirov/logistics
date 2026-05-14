import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-page' element={<AboutPage />} />
        <Route path='/contact-page' element={<ContactPage />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
      </Routes>
      
    </>
  )
}

export default App
