import { useParams, Link, Navigate } from 'react-router-dom'
import { buscarServicio } from '../data/servicios'
import styles from './ServiceDetail.module.css'

function ServiceDetail({ legacy = false }) {
    const { slug } = useParams()
    const servicio = buscarServicio(slug)

    if (!servicio) {
        return (
            <section className="seccion">
                <div className="contenedor">
                    <h1>Servicio no encontrado</h1>
                    <p>Consulta las áreas de atención disponibles.</p>
                    <Link to="/cirugia-general">Volver a Cirugía General</Link>
                </div>
            </section>
        )
    }

    if (legacy || slug !== servicio.slug) {
        return <Navigate to={`/${servicio.slug}`} replace />
    }

    return (
        <>
            <section className={styles.hero}>
                <div className="contenedor">
                    <span className={styles.eyebrow}>Cirugía General en Tijuana</span>
                    <h1 className={styles.titulo}>{servicio.titulo}</h1>
                    {servicio.nombreMedico && <p>{servicio.nombreMedico}</p>}
                    <p className={styles.resumen}>{servicio.resumen}</p>
                    {servicio.imagen && (
                        <img src={servicio.imagen} alt={servicio.titulo} className={styles.detalleImg} />
                    )}
                </div>
            </section>

            <section className={`${styles.bloque} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>Padecimientos y motivos de valoración</h2>
                    <ul>
                        {servicio.temas.map((tema) => <li key={tema}>{tema}</li>)}
                    </ul>
                    <p className={styles.parrafo}>
                        La indicación de un procedimiento depende de la valoración médica individual,
                        los síntomas, estudios y antecedentes de cada paciente.
                    </p>
                </div>
            </section>

            {servicio.avisoUrgencia && (
                <section className={`${styles.bloqueAlt} seccion`}>
                    <div className="contenedor">
                        <h2 className={styles.encabezado}>Si se trata de una emergencia</h2>
                        <p className={styles.parrafo}>
                            Este sitio no sustituye un servicio de urgencias. Ante síntomas graves o una
                            emergencia médica, acude al servicio de urgencias más cercano.
                        </p>
                    </div>
                </section>
            )}

            <section className={`${styles.bloqueAlt} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>Valoración por Cirugía General</h2>
                    <p className={styles.parrafo}>
                        El Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay, Tijuana.
                        Durante la valoración se revisa el caso y se explican las alternativas de manejo
                        de acuerdo con el diagnóstico.
                    </p>
                    <Link to="/contacto" className={styles.boton}>Agendar valoración</Link>
                </div>
            </section>
        </>
    )
}

export default ServiceDetail
