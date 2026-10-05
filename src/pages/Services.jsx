import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import styles from './Services.module.css'

function Services() {
    return (
        <section className="seccion">
            <div className="contenedor">
                <span className={styles.eyebrow}>Cirugía General en Tijuana</span>
                <h1 className={styles.titulo}>Áreas de atención</h1>
                <p className={styles.intro}>
                    Conoce las principales áreas de práctica privada del Dr. Edwin García Garrido.
                    Cada caso requiere valoración médica individual.
                </p>

                <div className={styles.grid}>
                    {servicios.map((servicio) => (
                        <Link key={servicio.slug} to={`/${servicio.slug}`} className={styles.tarjeta}>
                            <img src={servicio.imagen} alt={servicio.titulo} className={styles.tarjetaImg} />
                            <div className={styles.tarjetaTexto}>
                                <h2>{servicio.titulo}</h2>
                                <p>{servicio.resumen}</p>
                                <span className={styles.leerMas}>Conocer más →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
