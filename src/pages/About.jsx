import styles from './About.module.css'
import { IconShieldCheck, IconWorld, IconHeartHandshake } from '@tabler/icons-react'
function About() {
    return (
        <>
            {/* Hero: foto izquierda, texto derecha */}
            <section className={styles.hero}>
                <div className={`contenedor ${styles.heroGrid}`}>
                    <div className={styles.heroFoto}>
                        <img src="/doc2.jpeg" alt="Dr. Edwin García" />
                    </div>
                    <div className={styles.heroTexto}>
                        <span className={styles.eyebrow}>Cirujano General Certificado</span>
                        <h1 className={styles.heroTitulo}>Dr. Edwin García</h1>
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
                        Detrás de cada procedimiento hay una persona que confía en mí, y
                        trabajo con rigor para que las cosas salgan bien, Cuidando siempre su
                        bienestar por encima de todo. Me formé como médico en la Universidad
                        Autónoma de Baja California y concluí mi especialidad en Cirugía
                        General en la Universidad Juárez Autónoma de Tabasco.
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
                            <span className={styles.certLabel}>Certificación vigente</span>
                            <span className={styles.certOrg}>Consejo Mexicano de Cirugía General</span>
                            <span className={styles.certNum}>C25016825</span>
                            <span className={styles.certVig}>Vigente hasta 2030</span>
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
        </>
    )
}

export default About