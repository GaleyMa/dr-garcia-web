import { Link } from 'react-router-dom'
import styles from './InfoPage.module.css'

function NotFound() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <div className={styles.content}>
          <span className={styles.eyebrow}>Error 404</span>
          <h1>Página no encontrada</h1>
          <p>La dirección que intentaste abrir no existe o cambió de ubicación.</p>
          <div className={styles.links}>
            <Link to="/">Volver al inicio →</Link>
            <Link to="/cirugia-general">Ver Cirugía General →</Link>
            <Link to="/contacto">Contacto y citas →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
