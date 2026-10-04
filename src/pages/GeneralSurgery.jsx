import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import styles from './InfoPage.module.css'

function GeneralSurgery() {
  return (
    <>
      <section className={styles.hero}>
        <div className="contenedor">
          <span className={styles.eyebrow}>Atención quirúrgica</span>
          <h1>Cirugía General en Tijuana</h1>
          <p>Valoración, tratamiento quirúrgico y seguimiento por el Dr. Edwin García Garrido, médico especialista en Cirugía General.</p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className={styles.content}>
            <h2>¿Qué atiende un cirujano general?</h2>
            <p>La Cirugía General comprende la valoración y el tratamiento quirúrgico de distintos padecimientos. La necesidad de cirugía y el tipo de procedimiento se determinan de forma individual después de una valoración médica.</p>

            <h2>Principales áreas de atención</h2>
            <div className={styles.links}>
              {servicios.map((servicio) => (
                <Link key={servicio.slug} to={`/${servicio.slug}`}>
                  {servicio.titulo} →
                </Link>
              ))}
            </div>

            <h2>Consulta en Tijuana</h2>
            <p>El Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay, Tijuana, Baja California.</p>
            <p><Link className={styles.cta} to="/contacto">Solicitar una valoración</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default GeneralSurgery
