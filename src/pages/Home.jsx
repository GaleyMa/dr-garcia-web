import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { articulos } from '../data/articulos'

function Home() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContenido}>
                    <div className={styles.heroTexto}>
                        <h1 className={styles.nombre}>Dr. Edwin García</h1>
                        <p className={styles.especialidad}>
                            Cirujano especialista en Tijuana. Atención personalizada y profesional.
                        </p>
                        <Link to="/contacto" className={styles.boton}>
                            Agendar cita
                        </Link>
                    </div>
                    <div className={styles.heroImagen}>
                        <img src="https://placehold.co/340x450" alt="Dr. Edwin García" />
                    </div>
                </div>
            </section>

            {/* Presentación del doctor */}
            <section className={`${styles.presentacion} seccion`}>
                <div className="contenedor">
                    <h2 className="tituloSeccion">Experiencia que inspira confianza</h2>
                    <p>
                        blablablablablablablablablablablablablablablablablabla
                    </p>
                    <Link to="/sobre-el-doctor" className={styles.enlace}>
                        Conoce más sobre el doctor
                    </Link>
                </div>
            </section>

            {/* Servicios destacados */}
            <section className={`${styles.servicios} seccion`}>
                <div className="contenedor">
                    <h2 className="tituloSeccion">Servicios principales</h2>
                    <div className={styles.tarjetas}>
                        <div className={styles.tarjeta}>
                            <h3>Cirugía general</h3>
                            <p>Procedimientos seguros con recuperación acompañada.</p>
                        </div>
                        <div className={styles.tarjeta}>
                            <h3>Laparoscopía</h3>
                            <p>Técnicas mínimamente invasivas y menor tiempo de recuperación.</p>
                        </div>
                        <div className={styles.tarjeta}>
                            <h3>Consulta especializada</h3>
                            <p>Valoración personalizada para tu caso particular.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <Link to="/servicios" className={styles.enlace}>
                            Ver todos los servicios
                        </Link>
                    </div>
                </div>
            </section>

            {/* Temas de salud (blog) */}
            <section className={`${styles.blog} seccion`}>
                <div className="contenedor">
                    <h2 className="tituloSeccion">Temas de salud</h2>
                    <div className={styles.tarjetas}>
                        {articulos.map((art) => (
                            <Link
                                key={art.slug}
                                to={`/blog/${art.slug}`}
                                className={styles.tarjetaBlog}
                            >
                                <h3>{art.titulo}</h3>
                                <p>{art.resumen}</p>
                                <span className={styles.leerMas}>Leer más →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cierre / llamada a la acción */}
            <section className={styles.cta}>
                <div className="contenedor">
                    <h2 className={styles.ctaTitulo}>¿Listo para tu consulta?</h2>
                    <p className={styles.ctaTexto}>
                        Agenda una cita
                    </p>
                    <Link to="/contacto" className={styles.boton}>
                        Agendar cita
                    </Link>
                </div>
            </section>

        </>
    )
}

export default Home