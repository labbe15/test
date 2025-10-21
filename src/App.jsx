import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '@layouts/MainLayout'

// Lazy load pages for better performance
const Home = lazy(() => import('@pages/Home'))
const Services = lazy(() => import('@pages/Services'))
const Realisations = lazy(() => import('@pages/Realisations'))
const About = lazy(() => import('@pages/About'))
const Contact = lazy(() => import('@pages/Contact'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
