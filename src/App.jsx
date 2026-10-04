import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Article from './pages/Article'
import { Analytics } from "@vercel/analytics/react"
import ServiceDetail from './pages/ServiceDetail'
import SEO from './components/SEO'
import StructuredData from './components/StructuredData'
import GeneralSurgery from './pages/GeneralSurgery'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'

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

          <Route path="servicios" element={<Services />} />
          <Route path="cirugia-general" element={<GeneralSurgery />} />
          <Route path="preguntas-frecuentes" element={<FAQ />} />
          <Route path=":slug" element={<ServiceDetail />} />

          {/* Compatibilidad temporal con las URLs anteriores */}
          <Route path="servicios/:slug" element={<ServiceDetail legacy />} />

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
