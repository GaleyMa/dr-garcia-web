import { servicios } from './servicios'
import { articulos } from './articulos'

export const DEFAULT_SEO = {
  title: 'Dr. Edwin García Garrido | Cirujano General en Tijuana',
  description: 'Dr. Edwin García Garrido, Cirujano General en Tijuana. Consulta privada en Torre Médica Otay.',
  robots: 'index, follow',
  type: 'website',
}

const staticPages = {
  '/': {
    title: DEFAULT_SEO.title,
    description: 'Dr. Edwin García Garrido, Cirujano General en Tijuana. Consulta privada en Torre Médica Otay y atención en cirugía de vesícula, hernias, tiroides y lipomas.',
  },
  '/dr-edwin-garcia-garrido': {
    title: 'Dr. Edwin García Garrido | Cirujano General en Tijuana',
    description: 'Conoce la formación, certificación y experiencia profesional del Dr. Edwin García Garrido, Cirujano General en Tijuana.',
  },
  '/cirugia-general': {
    title: 'Cirujano General en Tijuana | Dr. Edwin García Garrido',
    description: 'Consulta de Cirugía General en Tijuana con el Dr. Edwin García Garrido. Conoce sus principales áreas de atención y solicita una valoración.',
  },
  '/preguntas-frecuentes': {
    title: 'Preguntas frecuentes | Dr. Edwin García Garrido',
    description: 'Respuestas sobre consulta, especialidad y principales áreas de atención del Dr. Edwin García Garrido, Cirujano General en Tijuana.',
  },
  '/contacto': {
    title: 'Contacto y citas | Dr. Edwin García Garrido',
    description: 'Solicita una consulta con el Dr. Edwin García Garrido, Cirujano General. Consulta privada en Torre Médica Otay, Tijuana.',
  },
  '/aviso-de-privacidad': {
    title: 'Aviso de privacidad | Dr. Edwin García Garrido',
    description: 'Aviso de privacidad del sitio profesional del Dr. Edwin García Garrido.',
  },
  '/terminos-de-uso': {
    title: 'Términos de uso | Dr. Edwin García Garrido',
    description: 'Términos de uso e información general del sitio profesional del Dr. Edwin García Garrido.',
  },
  '/aviso-medico': {
    title: 'Aviso médico | Dr. Edwin García Garrido',
    description: 'Alcance de la información médica publicada en el sitio del Dr. Edwin García Garrido.',
  },
}

const servicePages = Object.fromEntries(servicios.map((service) => [
  `/${service.slug}`,
  {
    title: `${service.titulo} en Tijuana | Dr. Edwin García Garrido`,
    description: `${service.resumen} Consulta privada con Cirujano General en Torre Médica Otay, Tijuana.`,
  },
]))

const articlePages = Object.fromEntries(articulos.map((article) => [
  `/blog/${article.slug}`,
  {
    title: `${article.titulo} | Dr. Edwin García Garrido`,
    description: article.resumen,
    robots: 'noindex, follow',
    type: 'article',
  },
]))

export const SEO_PAGES = {
  ...staticPages,
  ...servicePages,
  ...articlePages,
}

export const PRERENDER_ROUTES = Object.keys(SEO_PAGES)

export function getSeoForPath(pathname) {
  const metadata = SEO_PAGES[pathname]

  if (metadata) {
    return {
      ...DEFAULT_SEO,
      ...metadata,
      isNotFound: false,
    }
  }

  return {
    title: 'Página no encontrada | Dr. Edwin García Garrido',
    description: 'La página solicitada no existe o cambió de ubicación.',
    robots: 'noindex, follow',
    type: 'website',
    isNotFound: true,
  }
}
