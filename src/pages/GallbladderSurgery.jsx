import { Link } from 'react-router-dom'
import styles from './ServiceDetail.module.css'

function GallbladderSurgery() {
  return (
    <>
      <section className={styles.hero}>
        <div className="contenedor">
          <span className={styles.eyebrow}>Cirugía General · Tijuana</span>
          <h1 className={styles.titulo}>Cirugía de vesícula en Tijuana</h1>
          <p className={styles.resumen}>Información sobre valoración de vesícula y consulta con el Dr. Edwin García Garrido, Cirujano General.</p>
          <Link to="/contacto" className={styles.boton}>Agendar valoración</Link>
        </div>
      </section>
      <section className={`${styles.bloque} seccion`}>
        <div className="contenedor">
          <div className={styles.contenido}>
            <h2 className={styles.encabezado}>Valoración de vesícula</h2>
            <p className={styles.parrafo}>La consulta permite revisar síntomas, antecedentes y estudios disponibles para orientar cada caso de manera individual.</p>
            <h2 className={styles.encabezado}>Consulta en Tijuana</h2>
            <p className={styles.parrafo}>El Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay, Tijuana.</p>
            <Link to="/contacto" className={styles.boton}>Agendar valoración</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default GallbladderSurgery
