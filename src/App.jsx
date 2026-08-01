import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Article from './pages/Article'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre-el-doctor" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="blog/:slug" element={<Article />} />
      </Route>
    </Routes>
  )
}

export default App