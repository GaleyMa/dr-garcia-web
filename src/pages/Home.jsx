import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { articulos } from '../data/articulos'
import { servicios } from '../data/servicios'

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`contenedor ${styles.heroContenido}`}>
          <div className={styles.heroTexto}>
            <span className={styles.eyebrow}>Cirugía General · Tijuana</span>
            <h1>Cirugía General<br />con atención <span>individual.</span></h1>
            <p>Valoración, tratamiento quirúrgico y seguimiento con información clara durante cada etapa del proceso.</p>
            <div className={styles.heroAcciones}>
              <Link to="/contacto" className={styles.botonPrincipal}>Consultar disponibilidad</Link>
              <Link to="/cirugia-general" className={styles.botonSecundario}>Conocer servicios →</Link>
            </div>
            <div className={styles.certificacion}>
              <span className={styles.certificacionMarca}>CMCG</span>
              <span>Certificado por el<br /><strong>Consejo Mexicano de Cirugía General</strong></span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <span className={styles.anillo} aria-hidden="true" />
            <span className={styles.numeroDecorativo} aria-hidden="true">01</span>
            <div className={styles.heroImagen}>
              <img src="/doc3.png" alt="Dr. Edwin García Garrido, Cirujano General en Tijuana" />
            </div>
            <div className={styles.heroFicha}>
              <strong>Dr. Edwin García Garrido</strong>
              <span>Cirujano General</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.presentacion} seccion`}>
        <div className={`contenedor ${styles.presentacionGrid}`}>
          <div className={styles.presentacionMarca}>
            <span className={styles.eyebrowOscuro}>Atención médica</span>
            <span className={styles.cruzGrafica} aria-hidden="true">+</span>
          </div>
          <div>
            <blockquote className={styles.cita}>
              “Cada paciente merece ser escuchado. Mi compromiso es explicar el diagnóstico con claridad y acompañar cada etapa, desde la primera consulta hasta la recuperación.”
            </blockquote>
            <div className={styles.firma}>
              <span><strong>Dr. Edwin García Garrido</strong><small>Cirujano General</small></span>
              <Link to="/dr-edwin-garcia-garrido">Conocer trayectoria →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.servicios} seccion`}>
        <div className="contenedor">
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.eyebrowOscuro}>Áreas de práctica</span>
              <h2>Cirugía General</h2>
            </div>
            <p>Valoración quirúrgica para padecimientos frecuentes, con información específica sobre cada procedimiento y sus indicaciones.</p>
          </div>

          <div className={styles.serviciosLista}>
            {servicios.map((servicio, index) => (
              <Link to={`/${servicio.slug}`} className={styles.servicioFila} key={servicio.slug}>
                <span className={styles.servicioNumero}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{servicio.titulo}</h3>
                  <p>{servicio.resumen}</p>
                </div>
                <span className={styles.servicioArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <Link to="/cirugia-general" className={styles.verTodos}>Explorar Cirugía General <span>→</span></Link>
        </div>
      </section>

      <section className={`${styles.ubicacion} seccion`}>
        <div className={`contenedor ${styles.ubicacionGrid}`}>
          <div className={styles.ubicacionInfo}>
            <span className={styles.eyebrowOscuro}>Consulta privada</span>
            <h2>Torre Médica<br />Otay</h2>
            <div className={styles.ubicacionLinea} aria-hidden="true" />
            <p>Aeropuerto 16000, La Pechuga,<br />22425 Tijuana, Baja California.</p>
            <div className={styles.contactoMini}>
              <span>Contacto</span>
              <a href="mailto:dr.edwin.cirugia@gmail.com">dr.edwin.cirugia@gmail.com</a>
            </div>
            <Link to="/contacto" className={styles.botonOscuro}>Consultar disponibilidad</Link>
          </div>
          <div className={styles.mapaWrap}>
            <span className={styles.mapaNumero} aria-hidden="true">32°31′</span>
            <div className={styles.mapa}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440.00078511281515!2d-116.95267333328579!3d32.53147709553132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947003fc16575%3A0xaa3bdfc3905b9312!2sTorre%20M%C3%A9dica%20Otay!5e0!3m2!1ses!2smx!4v1786228442649!5m2!1ses!2smx"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio del Dr. Edwin García Garrido"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.blog} seccion`}>
        <div className="contenedor">
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.eyebrowOscuro}>Información para pacientes</span>
              <h2>Temas de salud</h2>
            </div>
            <p>Información general para comprender algunos padecimientos y saber cuándo una valoración médica puede ser necesaria.</p>
          </div>
          <div className={styles.articulosLista}>
            {articulos.map((art, index) => (
              <Link key={art.slug} to={`/blog/${art.slug}`} className={styles.articulo}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{art.titulo}</h3>
                <p>{art.resumen}</p>
                <i aria-hidden="true">→</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`contenedor ${styles.ctaGrid}`}>
          <span className={styles.ctaAnillo} aria-hidden="true" />
          <div>
            <span className={styles.eyebrow}>Consulta privada · Tijuana</span>
            <h2>¿Necesitas una valoración quirúrgica?</h2>
          </div>
          <Link to="/contacto" className={styles.ctaBoton}>Consultar disponibilidad <span>→</span></Link>
        </div>
      </section>
    </>
  )
}

export default Home
