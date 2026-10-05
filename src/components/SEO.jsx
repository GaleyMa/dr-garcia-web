import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath } from '../data/seo'

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
    const metadata = getSeoForPath(pathname)

    document.title = metadata.title
    setMeta('description', metadata.description)
    setMeta('robots', metadata.robots)
    setMeta('og:title', metadata.title, true)
    setMeta('og:description', metadata.description, true)
    setMeta('og:locale', 'es_MX', true)
    setMeta('og:type', metadata.type, true)
  }, [pathname])

  return null
}

export default SEO
