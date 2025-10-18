import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Realisations from './pages/Realisations.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  )
}
