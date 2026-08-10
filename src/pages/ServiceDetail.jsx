import { useParams, Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import styles from './ServiceDetail.module.css'

function ServiceDetail() {
    const { slug } = useParams()
    const servicio = servicios.find((s) => s.slug === slug)

    if (!servicio) {
        return (
            <section className="seccion">
                <div className="contenedor">
                    <h1>Servicio no encontrado</h1>
                    <Link to="/servicios">Volver a servicios</Link>
                </div>
            </section>
        )
    }

    return (
        <>
            <section className={styles.hero}>
                <div className="contenedor">
                    <section className={styles.hero}>
                        <div className="contenedor">
                            <span className={styles.eyebrow}>Servicio</span>
                            <h1 className={styles.titulo}>{servicio.titulo}</h1>
                            <p className={styles.resumen}>{servicio.resumen}</p>
                        </div>
                    </section>

                    {servicio.imagen && (<img src={servicio.imagen} alt={servicio.titulo} className={styles.detalleImg} />)}

                </div>
            </section>

            <section className={`${styles.bloque} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>¿Qué es?</h2>
                    <p className={styles.parrafo}>{servicio.queEs}</p>
                </div>
            </section>

            <section className={`${styles.bloqueAlt} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>¿Cuándo se necesita?</h2>
                    <p className={styles.parrafo}>{servicio.cuando}</p>
                </div>
            </section>

            <section className={`${styles.bloque} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>El procedimiento</h2>
                    <p className={styles.parrafo}>{servicio.procedimiento}</p>
                </div>
            </section>
            <section className={`${styles.bloqueAlt} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>Riesgos</h2>
                    <p className={styles.parrafo}>{servicio.riesgo}</p>
                </div>
            </section>
            <section className={`${styles.bloque} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>Preparación</h2>
                    <p className={styles.parrafo}>{servicio.preparacion}</p>
                </div>
            </section>
            <section className={`${styles.bloqueAlt} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>Recuperación</h2>
                    <p className={styles.parrafo}>{servicio.recuperacion}</p>
                </div>
            </section>
            <section className={`${styles.bloque} seccion`}>
                <div className="contenedor">
                    <h2 className={styles.encabezado}>Resultados</h2>
                    <p className={styles.parrafo}>{servicio.resultados}</p>
                    <Link to="/contacto" className={styles.boton}>Agendar consulta</Link>
                </div>
            </section>
        </>
    )
}

export default ServiceDetail