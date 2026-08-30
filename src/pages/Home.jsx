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
                        <span className={styles.badge}>
                            ✓ Certificado por el Consejo Mexicano de Cirugía General
                        </span>
                        <h1 className={styles.nombre}>
                            Cirugía General y Laparoscópica de <span className={styles.acento}>Mínima Invasión</span> en Tijuana
                        </h1>
                        <p className={styles.especialidad}>
                            Procedimientos seguros, menor dolor y rápida recuperación. Atención especializada y cercana.
                        </p>
                        <Link to="/contacto" className={styles.boton}>
                            Agendar cita
                        </Link>

                    </div>

                    <div className={styles.heroImagen}>
                        <img src="/doc3.png" alt="Dr. Edwin García, cirujano general y laparoscópico" />
                    </div>
                </div>
            </section>

            {/* Presentación*/}
            <section className={`${styles.presentacion} seccion`}>
                <div className="contenedor">
                    <h2 className="tituloSeccion">Claridad en cada paso</h2>
                    <p>
                        Cada paciente es único, y merece ser escuchado. Como cirujano general, me comprometo a explicarte tu diagnóstico con claridad y a acompañarte en cada paso, desde la primera consulta hasta tu recuperación.
                    </p>
                    <Link to="/sobre-mi" className={styles.enlace}>
                        Conoce más sobre mí
                    </Link>
                </div>
            </section>

            {/* Servicios destacados */}
            <section className={`${styles.servicios} seccion`}>
                <div className="contenedor">
                    <h2 className={`tituloSeccion ${styles.tituloClaro}`}>Servicios principales</h2>
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
            {/* Ubicación */}
            <section className={`${styles.ubicacion} seccion`}>
                <div className={`contenedor ${styles.ubicacionGrid}`}>
                    <div className={styles.ubicacionInfo}>
                        <span className={styles.eyebrow}>Dónde encontrarme</span>
                        <h2 className={styles.ubicacionTitulo}>Ubicación del consultorio</h2>
                        <p className={styles.ubicacionTexto}>
                            Te espero en la Torre Médica Otay, un espacio pensado para tu comodidad
                            y privacidad.
                        </p>

                        <div className={styles.ubicacionDatos}>
                            <div className={styles.dato}>
                                <span className={styles.datoLabel}>Dirección</span>
                                <span className={styles.datoValor}>Torre Médica Otay, Tijuana, B.C.</span>
                            </div>
                            <div className={styles.dato}>
                                <span className={styles.datoLabel}>Horario</span>
                                <span className={styles.datoValor}>Lun a Vie · 8:00 – 13:00</span>
                            </div>
                            <div className={styles.dato}>
                                <span className={styles.datoLabel}>Correo</span>
                                <span className={styles.datoValor}>dr.edwin.cirugia@gmail.com</span>
                            </div>
                        </div>

                        <Link to="/contacto" className={styles.boton}>Agendar cita</Link>
                    </div>

                    <div className={styles.mapa}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440.00078511281515!2d-116.95267333328579!3d32.53147709553132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947003fc16575%3A0xaa3bdfc3905b9312!2sTorre%20M%C3%A9dica%20Otay!5e0!3m2!1ses!2smx!4v1786228442649!5m2!1ses!2smx"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación del consultorio del Dr. Edwin García"
                        ></iframe>
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