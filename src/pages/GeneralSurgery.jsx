import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import infoStyles from './InfoPage.module.css'
import cardStyles from './Services.module.css'

function GeneralSurgery() {
  return (
    <>
      <section className={infoStyles.hero}>
        <div className="contenedor">
          <span className={infoStyles.eyebrow}>Dr. Edwin García Garrido</span>
          <h1>Cirujano General en Tijuana</h1>
          <p>
            Consulta de Cirugía General para valoración, tratamiento quirúrgico y seguimiento
            en Torre Médica Otay, Tijuana, Baja California.
          </p>
          <Link className={infoStyles.cta} to="/contacto">Agendar valoración</Link>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className={infoStyles.content}>
            <h2>¿Qué atiende un cirujano general?</h2>
            <p>
              La Cirugía General comprende la valoración y el tratamiento quirúrgico de
              distintos padecimientos. La necesidad de cirugía y el tipo de procedimiento
              se determinan de forma individual después de una valoración médica.
            </p>
          </div>

          <h2 className={cardStyles.titulo}>Áreas de atención</h2>
          <p className={cardStyles.intro}>
            Conoce las principales áreas de práctica privada del Dr. Edwin García Garrido.
            Selecciona un servicio para consultar información específica.
          </p>

          <div className={cardStyles.grid}>
            {servicios.map((servicio) => (
              <Link key={servicio.slug} to={`/${servicio.slug}`} className={cardStyles.tarjeta}>
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className={cardStyles.tarjetaImg}
                  loading="lazy"
                />
                <div className={cardStyles.tarjetaTexto}>
                  <h2>{servicio.titulo}</h2>
                  <p>{servicio.resumen}</p>
                  <span className={cardStyles.leerMas}>Conocer más →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className={infoStyles.content}>
            <h2>Consulta de Cirugía General en Tijuana</h2>
            <p>
              El Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay.
              Durante la valoración se revisa cada caso de forma individual y se explican
              las alternativas de manejo de acuerdo con el diagnóstico.
            </p>
            <p>
              <Link to="/dr-edwin-garcia-garrido">Conocer formación y experiencia →</Link>
            </p>
            <p><Link className={infoStyles.cta} to="/contacto">Solicitar una valoración</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default GeneralSurgery
