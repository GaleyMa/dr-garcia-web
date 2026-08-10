import { Link } from 'react-router-dom'
import { servicios } from '../data/servicios'
import styles from './Services.module.css'

function Services() {
    return (
        <section className="seccion">
            <div className="contenedor">
                <span className={styles.eyebrow}>Áreas de atención</span>
                <h1 className={styles.titulo}>Servicios</h1>
                <p className={styles.intro}>
                    Atención quirúrgica especializada con un enfoque cercano y profesional.
                </p>

                <div className={styles.grid}>
                    {servicios.map((s) => (
                        <Link key={s.slug} to={`/servicios/${s.slug}`} className={styles.tarjeta}>
                            <img src={s.imagen} alt={s.titulo} className={styles.tarjetaImg} />
                            <div className={styles.tarjetaTexto}>
                                <h2>{s.titulo}</h2>
                                <p>{s.resumen}</p>
                                <span className={styles.leerMas}>Ver más →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services