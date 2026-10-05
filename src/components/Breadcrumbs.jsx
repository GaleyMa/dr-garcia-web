import { Link, useLocation } from 'react-router-dom'
import { buscarServicio } from '../data/servicios'
import styles from './Breadcrumbs.module.css'

const labels = {
  'dr-edwin-garcia-garrido': 'Dr. Edwin García Garrido',
  'cirugia-general': 'Cirugía General',
  'preguntas-frecuentes': 'Preguntas frecuentes',
  contacto: 'Contacto',
  blog: 'Temas de salud',
}

function Breadcrumbs() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  const parts = pathname.split('/').filter(Boolean)
  const service = parts.length === 1 ? buscarServicio(parts[0]) : null

  const crumbs = [{ label: 'Inicio', path: '/' }]

  if (service) {
    crumbs.push({ label: 'Cirugía General', path: '/cirugia-general' })
    crumbs.push({ label: service.titulo, path: pathname })
  } else {
    let path = ''
    parts.forEach((part) => {
      path += `/${part}`
      crumbs.push({ label: labels[part] || part.replaceAll('-', ' '), path })
    })
  }

  return (
    <nav className={styles.wrap} aria-label="Migas de pan">
      <div className={`contenedor ${styles.inner}`}>
        {crumbs.map((crumb, index) => (
          <span key={crumb.path}>
            {index > 0 && <span className={styles.separator}>/</span>}
            {index === crumbs.length - 1
              ? <span aria-current="page">{crumb.label}</span>
              : <Link to={crumb.path}>{crumb.label}</Link>}
          </span>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumbs
