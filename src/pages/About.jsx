import { Link } from 'react-router-dom'
import styles from './About.module.css'
import { IconShieldCheck, IconWorld, IconHeartHandshake } from '@tabler/icons-react'
function About() {
    return (
        <>
            {/* Hero: foto izquierda, texto derecha */}
            <section className={styles.hero}>
                <div className={`contenedor ${styles.heroGrid}`}>
                    <div className={styles.heroFoto}>
                        <img src="/doc2.jpeg" alt="Dr. Edwin García Garrido" />
                    </div>
                    <div className={styles.heroTexto}>
                        <span className={styles.eyebrow}>Cirujano General Certificado</span>
                        <h1 className={styles.heroTitulo}>Dr. Edwin García Garrido</h1>
                        <p className={styles.heroFrase}>
                            Cirugía general con un trato cercano, claro y humano.
                        </p>
                    </div>
                </div>
            </section>

            {/* Datos rápidos: tarjetas que flotan sobre el borde del hero */}
            <div className={`contenedor ${styles.stats}`}>
                <div className={styles.stat}>
                    <IconShieldCheck className={styles.statIcon} stroke={1.5} />
                    <span className={styles.statTitulo}>Certificado</span>
                    <span className={styles.statSub}>Consejo Mexicano de Cirugía General</span>
                </div>
                <div className={styles.stat}>
                    <IconWorld className={styles.statIcon} stroke={1.5} />
                    <span className={styles.statTitulo}>Español e Inglés</span>
                    <span className={styles.statSub}>Atención en dos idiomas</span>
                </div>
                <div className={styles.stat}>
                    <IconHeartHandshake className={styles.statIcon} stroke={1.5} />
                    <span className={styles.statTitulo}>Trato humano</span>
                    <span className={styles.statSub}>Atención cercana y personalizada</span>
                </div>
            </div>

            {/* Sobre mí — estilo editorial */}
            <section className={`${styles.bloque} seccion`}>
                <div className="contenedor">
                    <span className={styles.eyebrowDark}>Sobre mí</span>
                    <p className={styles.lead}>
                        Ejerzo la medicina desde la idea de que cada paciente
                        merece ser escuchado con atención, comprendido y acompañado en cada
                        etapa de su tratamiento.
                    </p>
                    <p className={styles.parrafo}>
                        Detrás de cada procedimiento hay una persona que confía en mí. Me formé
                        como médico en la Universidad Autónoma de Baja California y concluí mi
                        especialidad en Cirugía General en la Universidad Juárez Autónoma de
                        Tabasco. Mi experiencia incluye el Hospital Regional de Alta Especialidad
                        Dr. Gustavo A. Rovirosa Pérez.
                    </p>
                </div>
            </section>

            {/* Credenciales*/}
            <section className={`${styles.credSeccion} seccion`}>
                <div className="contenedor">
                    <span className={styles.eyebrow}>Credenciales verificables</span>
                    <h2 className={styles.credTitulo}>Formación certificada</h2>

                    <div className={styles.credGrid}>
                        {/* Tarjeta destacada: certificación */}
                        <div className={styles.certCard}>
                            <IconShieldCheck className={styles.certIcon} stroke={1.5} />
                            <span className={styles.certLabel}>Certificación</span>
                            <span className={styles.certOrg}>Consejo Mexicano de Cirugía General</span>
                            <span className={styles.certNum}>C25016825</span>
                        </div>

                        {/* Cédulas */}
                        <div className={styles.cedulas}>
                            <div className={styles.cedula}>
                                <span className={styles.cedLabel}>Cédula profesional · Médico</span>
                                <span className={styles.cedNum}>12992664</span>
                                <span className={styles.cedInst}>UABC</span>
                            </div>
                            <div className={styles.cedula}>
                                <span className={styles.cedLabel}>Cédula de especialista · Cirugía General</span>
                                <span className={styles.cedNum}>14920012</span>
                                <span className={styles.cedInst}>UJAT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.trayectoria} seccion`}>
                <div className="contenedor">
                    <div className={styles.trayectoriaGrid}>
                        <div>
                            <span className={styles.eyebrowDark}>Formación y experiencia</span>
                            <h2 className={styles.seccionTitulo}>Trayectoria profesional</h2>
                        </div>
                        <div className={styles.trayectoriaContenido}>
                            <div className={styles.trayectoriaItem}>
                                <span>Formación médica</span>
                                <h3>Universidad Autónoma de Baja California</h3>
                                <p>Formación como médico.</p>
                            </div>
                            <div className={styles.trayectoriaItem}>
                                <span>Especialidad</span>
                                <h3>Universidad Juárez Autónoma de Tabasco</h3>
                                <p>Especialidad en Cirugía General.</p>
                            </div>
                            <div className={styles.trayectoriaItem}>
                                <span>Experiencia hospitalaria</span>
                                <h3>Hospital Regional de Alta Especialidad Dr. Gustavo A. Rovirosa Pérez</h3>
                                <p>Experiencia profesional dentro del ámbito de la Cirugía General.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.areas} seccion`}>
                <div className="contenedor">
                    <span className={styles.eyebrowDark}>Áreas de práctica</span>
                    <h2 className={styles.seccionTitulo}>Cirugía General y valoración quirúrgica</h2>
                    <p className={styles.seccionIntro}>Conoce las principales áreas de atención en consulta privada.</p>
                    <div className={styles.areasGrid}>
                        <Link to="/cirugia-de-vesicula">Cirugía de vesícula <span>→</span></Link>
                        <Link to="/cirugia-de-hernia">Cirugía de hernia <span>→</span></Link>
                        <Link to="/cirugia-de-tiroides">Cirugía de tiroides <span>→</span></Link>
                        <Link to="/lipomas">Lipomas <span>→</span></Link>
                        <Link to="/trauma-y-urgencias">Trauma y urgencias quirúrgicas <span>→</span></Link>
                    </div>
                </div>
            </section>

            <section className={`${styles.consulta} seccion`}>
                <div className={`contenedor ${styles.consultaGrid}`}>
                    <div>
                        <span className={styles.eyebrow}>Consulta privada</span>
                        <h2>Consulta de Cirugía General en Tijuana</h2>
                        <p>Torre Médica Otay · Aeropuerto 16000, La Pechuga, 22425 Tijuana, Baja California.</p>
                        <p>Atención en español e inglés.</p>
                    </div>
                    <div className={styles.consultaAcciones}>
                        <Link to="/contacto" className={styles.consultaBoton}>Consultar disponibilidad</Link>
                        <Link to="/cirugia-general" className={styles.consultaEnlace}>Ver áreas de atención →</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About