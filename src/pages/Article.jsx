import { useParams, Link } from 'react-router-dom'
import { articulos } from '../data/articulos'
import styles from './Article.module.css'

function Article() {
    const { slug } = useParams()
    const articulo = articulos.find((art) => art.slug === slug)

    if (!articulo) {
        return (
            <section className="seccion">
                <div className="contenedor">
                    <h1>Artículo no encontrado</h1>
                    <Link to="/">Volver al inicio</Link>
                </div>
            </section>
        )
    }

    return (
        <section className="seccion">
            <article className="contenedor">
                <h1 className={styles.titulo}>{articulo.titulo}</h1>
                <div className={styles.contenido}>
                    {articulo.contenido.split('\n\n').map((parrafo, i) => (
                        <p key={i}>{parrafo}</p>
                    ))}
                </div>
                <Link to="/" className={styles.volver}>← Volver</Link>
            </article>
        </section>
    )
}

export default Article