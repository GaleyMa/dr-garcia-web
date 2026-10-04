import { Link } from 'react-router-dom'
import styles from './About.module.css'

const areas = [
  ['01', 'Cirugía de vesícula', '/cirugia-de-vesicula'],
  ['02', 'Cirugía de hernia', '/cirugia-de-hernia'],
  ['03', 'Cirugía de tiroides', '/cirugia-de-tiroides'],
  ['04', 'Lipomas', '/lipomas'],
  ['05', 'Trauma y urgencias quirúrgicas', '/trauma-y-urgencias'],
]

function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`contenedor ${styles.heroGrid}`}>
          <div className={styles.heroTexto}>
            <span className={styles.kicker}>Cirugía General · Tijuana</span>
            <h1>Dr. Edwin<br />García Garrido</h1>
            <p className={styles.especialidad}>Cirujano General</p>
            <div className={styles.heroMeta}>
              <span>Certificado por el Consejo Mexicano de Cirugía General</span>
              <span>Consulta privada en Torre Médica Otay</span>
            </div>
            <Link to="/contacto" className={styles.heroCta}>Consultar disponibilidad</Link>
          </div>
          <figure className={styles.heroFoto}>
            <img src="/doc2.jpeg" alt="Dr. Edwin García Garrido, Cirujano General en Tijuana" />
          </figure>
        </div>
      </section>

      <section className={`${styles.presentacion} seccion`}>
        <div className={`contenedor ${styles.editorialGrid}`}>
          <div>
            <span className={styles.label}>Sobre el Dr. García</span>
            <h2>Formación quirúrgica y atención individual.</h2>
          </div>
          <div className={styles.copy}>
            <p>El Dr. Edwin García Garrido es médico especialista en Cirugía General. Se formó como médico en la Universidad Autónoma de Baja California y realizó la especialidad en Cirugía General en la Universidad Juárez Autónoma de Tabasco.</p>
            <p>Su experiencia profesional incluye el Hospital Regional de Alta Especialidad Dr. Gustavo A. Rovirosa Pérez. En consulta privada realiza valoración quirúrgica en Tijuana, con atención en español e inglés.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.credenciales} seccion`}>
        <div className="contenedor">
          <div className={styles.sectionHead}>
            <span className={styles.label}>Credenciales</span>
            <h2>Información profesional verificable</h2>
          </div>
          <div className={styles.credLista}>
            <div className={styles.credFila}>
              <span className={styles.credTipo}>Certificación</span>
              <div><strong>Consejo Mexicano de Cirugía General</strong><span>C25016825</span></div>
            </div>
            <div className={styles.credFila}>
              <span className={styles.credTipo}>Cédula profesional</span>
              <div><strong>12992664</strong><span>Universidad Autónoma de Baja California</span></div>
            </div>
            <div className={styles.credFila}>
              <span className={styles.credTipo}>Cédula de especialista</span>
              <div><strong>14920012</strong><span>Cirugía General · Universidad Juárez Autónoma de Tabasco</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.trayectoria} seccion`}>
        <div className={`contenedor ${styles.trayectoriaGrid}`}>
          <div className={styles.stickyTitle}>
            <span className={styles.label}>Formación y experiencia</span>
            <h2>Trayectoria profesional</h2>
          </div>
          <div className={styles.timeline}>
            <article className={styles.timelineItem}>
              <span className={styles.dot} />
              <span className={styles.timelineTipo}>Formación médica</span>
              <h3>Universidad Autónoma de Baja California</h3>
              <p>Formación como médico.</p>
            </article>
            <article className={styles.timelineItem}>
              <span className={styles.dot} />
              <span className={styles.timelineTipo}>Especialidad</span>
              <h3>Universidad Juárez Autónoma de Tabasco</h3>
              <p>Especialidad en Cirugía General.</p>
            </article>
            <article className={styles.timelineItem}>
              <span className={styles.dot} />
              <span className={styles.timelineTipo}>Experiencia hospitalaria</span>
              <h3>Hospital Regional de Alta Especialidad Dr. Gustavo A. Rovirosa Pérez</h3>
              <p>Experiencia profesional en el ámbito de la Cirugía General.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.areas} seccion`}>
        <div className="contenedor">
          <div className={styles.sectionHead}>
            <span className={styles.label}>Áreas de práctica</span>
            <h2>Valoración y manejo en Cirugía General</h2>
          </div>
          <div className={styles.areasLista}>
            {areas.map(([numero, nombre, ruta]) => (
              <Link to={ruta} className={styles.areaFila} key={ruta}>
                <span className={styles.areaNumero}>{numero}</span>
                <span className={styles.areaNombre}>{nombre}</span>
                <span className={styles.areaArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.consulta}>
        <div className={`contenedor ${styles.consultaGrid}`}>
          <div>
            <span className={styles.kicker}>Consulta privada</span>
            <h2>Cirugía General en Tijuana</h2>
            <p>Torre Médica Otay<br />Aeropuerto 16000, La Pechuga, 22425 Tijuana, Baja California.</p>
            <span className={styles.idiomas}>Atención en español e inglés</span>
          </div>
          <div className={styles.consultaAcciones}>
            <Link to="/contacto" className={styles.consultaCta}>Consultar disponibilidad</Link>
            <Link to="/cirugia-general" className={styles.consultaLink}>Conocer áreas de atención →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
