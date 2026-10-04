import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buscarServicio } from '../data/servicios'
import { articulos } from '../data/articulos'

const DEFAULT_TITLE = 'Dr. Edwin García Garrido | Cirujano General en Tijuana'
const DEFAULT_DESCRIPTION = 'Dr. Edwin García Garrido, Cirujano General en Tijuana. Consulta privada en Torre Médica Otay.'

const pages = {
  '/': {
    title: DEFAULT_TITLE,
    description: 'Dr. Edwin García Garrido, Cirujano General en Tijuana. Consulta privada en Torre Médica Otay y atención en cirugía de vesícula, hernias, tiroides y lipomas.',
  },
  '/dr-edwin-garcia-garrido': {
    title: 'Dr. Edwin García Garrido | Cirujano General en Tijuana',
    description: 'Conoce la formación, certificación y experiencia profesional del Dr. Edwin García Garrido, Cirujano General en Tijuana.',
  },
  '/servicios': {
    title: 'Servicios de Cirugía General en Tijuana | Dr. Edwin García',
    description: 'Áreas de atención del Dr. Edwin García Garrido en Tijuana: vesícula, hernias, tiroides, lipomas, trauma y urgencias quirúrgicas.',
  },
  '/contacto': {
    title: 'Contacto y citas | Dr. Edwin García Garrido',
    description: 'Solicita una consulta con el Dr. Edwin García Garrido, Cirujano General. Consulta privada en Torre Médica Otay, Tijuana.',
  },
}

function setMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(property ? 'property' : 'name', name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    let metadata = pages[pathname]

    const serviceSlug = pathname.slice(1)
    const service = buscarServicio(serviceSlug)

    if (service && pathname === `/${service.slug}`) {
      metadata = {
        title: `${service.titulo} en Tijuana | Dr. Edwin García Garrido`,
        description: `${service.resumen} Consulta privada con Cirujano General en Torre Médica Otay, Tijuana.`,
      }
    }

    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '')
      const article = articulos.find((item) => item.slug === slug)
      if (article) {
        metadata = {
          title: `${article.titulo} | Dr. Edwin García Garrido`,
          description: article.resumen,
        }
      }
    }

    const title = metadata?.title || DEFAULT_TITLE
    const description = metadata?.description || DEFAULT_DESCRIPTION

    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:locale', 'es_MX', true)
    setMeta('og:type', pathname.startsWith('/blog/') ? 'article' : 'website', true)
  }, [pathname])

  return null
}

export default SEO
