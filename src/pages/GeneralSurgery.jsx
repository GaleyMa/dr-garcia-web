import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import styles from './GeneralSurgery.module.css'

function GeneralSurgery() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`contenedor ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>Dr. Edwin García Garrido · Tijuana</span>
            <h1>Cirugía<br />General</h1>
          </div>
          <div className={styles.heroIntro}>
            <p>Valoración, tratamiento quirúrgico y seguimiento para distintos padecimientos dentro de la práctica de Cirugía General.</p>
            <Link to="/contacto" className={styles.heroCta}>Consultar disponibilidad →</Link>
          </div>
        </div>
        <span className={styles.heroAnillo} aria-hidden="true" />
      </section>

      <section className={`${styles.introduccion} seccion`}>
        <div className={`contenedor ${styles.introGrid}`}>
          <div className={styles.introVisual} aria-hidden="true">
            <span className={styles.orbita}><i /></span>
            <span className={styles.cruz}>+</span>
            <span className={styles.visualLabel}>Valoración<br />individual</span>
          </div>
          <div className={styles.introCopy}>
            <span className={styles.label}>La especialidad</span>
            <h2>¿Qué atiende un cirujano general?</h2>
            <p>La Cirugía General comprende la valoración y el tratamiento quirúrgico de distintos padecimientos. Una consulta permite revisar síntomas, estudios previos y antecedentes para determinar las alternativas de manejo.</p>
            <p>La necesidad de cirugía y el tipo de procedimiento se definen de forma individual. Una valoración quirúrgica no significa automáticamente que sea necesario operar.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.areas} seccion`}>
        <div className="contenedor">
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.label}>Áreas de atención</span>
              <h2>Práctica quirúrgica</h2>
            </div>
            <p>Selecciona un área para conocer padecimientos relacionados, criterios generales de valoración y cuándo puede considerarse tratamiento quirúrgico.</p>
          </div>

          <div className={styles.indice}>
            {servicios.map((servicio, index) => (
              <Link key={servicio.slug} to={`/${servicio.slug}`} className={styles.areaFila}>
                <span className={styles.numero}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.areaTexto}>
                  <h3>{servicio.titulo}</h3>
                  <p>{servicio.resumen}</p>
                </div>
                <span className={styles.areaMarca} aria-hidden="true">
                  <i />
                  <b>↗</b>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.proceso} seccion`}>
        <div className={`contenedor ${styles.procesoGrid}`}>
          <div>
            <span className={styles.label}>Valoración quirúrgica</span>
            <h2>Primero entender<br />el caso.</h2>
          </div>
          <div className={styles.pasos}>
            <article>
              <span>01</span>
              <div><h3>Consulta</h3><p>Revisión de síntomas, antecedentes y motivo de valoración.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Estudios</h3><p>Revisión de estudios disponibles y solicitud de información adicional cuando sea necesaria.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Alternativas</h3><p>Explicación del diagnóstico y de las opciones de manejo apropiadas para cada caso.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.doctor}>
        <div className={`contenedor ${styles.doctorGrid}`}>
          <div className={styles.doctorSello} aria-hidden="true"><span>CMCG</span></div>
          <div>
            <span className={styles.eyebrow}>Cirujano General</span>
            <h2>Dr. Edwin García Garrido</h2>
            <p>Certificado por el Consejo Mexicano de Cirugía General. Consulta privada en Torre Médica Otay, Tijuana.</p>
          </div>
          <div className={styles.doctorAcciones}>
            <Link to="/dr-edwin-garcia-garrido">Conocer trayectoria →</Link>
            <Link to="/contacto" className={styles.doctorCta}>Consultar disponibilidad</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default GeneralSurgery
