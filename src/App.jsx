import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'
import { Analytics } from "@vercel/analytics/react"
import SEO from './components/SEO'
import StructuredData from './components/StructuredData'
import GeneralSurgery from './pages/GeneralSurgery'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import GallbladderSurgery from './pages/GallbladderSurgery'
import HerniaSurgery from './pages/HerniaSurgery'
import ThyroidSurgery from './pages/ThyroidSurgery'
import LipomaSurgery from './pages/LipomaSurgery'
import TraumaEmergencySurgery from './pages/TraumaEmergencySurgery'
import Legal from './pages/Legal'

function App() {
  return (
    <>
      <SEO />
      <StructuredData />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dr-edwin-garcia-garrido" element={<About />} />
          <Route path="sobre-mi" element={<Navigate to="/dr-edwin-garcia-garrido" replace />} />

          <Route path="servicios" element={<Navigate to="/cirugia-general" replace />} />
          <Route path="cirugia-general" element={<GeneralSurgery />} />
          <Route path="preguntas-frecuentes" element={<FAQ />} />
          <Route path="cirugia-de-vesicula" element={<GallbladderSurgery />} />
          <Route path="cirugia-de-hernia" element={<HerniaSurgery />} />
          <Route path="cirugia-de-tiroides" element={<ThyroidSurgery />} />
          <Route path="lipomas" element={<LipomaSurgery />} />
          <Route path="trauma-y-urgencias" element={<TraumaEmergencySurgery />} />

          {/* Redirecciones de compatibilidad con las URLs anteriores */}
          <Route path="servicios/vesicula" element={<Navigate to="/cirugia-de-vesicula" replace />} />
          <Route path="servicios/hernias" element={<Navigate to="/cirugia-de-hernia" replace />} />
          <Route path="servicios/tiroides" element={<Navigate to="/cirugia-de-tiroides" replace />} />
          <Route path="servicios/lipomas" element={<Navigate to="/lipomas" replace />} />
          <Route path="servicios/trauma-urgencias" element={<Navigate to="/trauma-y-urgencias" replace />} />
          <Route path="servicios/:slug" element={<Navigate to="/cirugia-general" replace />} />

          <Route path="contacto" element={<Contact />} />
          <Route path="blog/:slug" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App
