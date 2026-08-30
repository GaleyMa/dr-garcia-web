import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import styles from './Layout.module.css'
import { useState } from 'react'
import { servicios } from '../data/servicios'

function Layout() {
    const [menuAbierto, setMenuAbierto] = useState(false)
    const [menuMovil, setMenuMovil] = useState(false)

    return (

        <>
            <div className={styles.topbar}>
                <div className={styles.topbarContenido}>
                    <a href="mailto:dr.edwin.cirugia@gmail.com" className={styles.topbarItem}>
                        dr.edwin.cirugia@gmail.com
                    </a>
                    <span className={styles.topbarItem}>
                        Torre Médica Otay, Tijuana
                    </span>
                </div>
            </div>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>
                    <img src="/logo-barra-principal.png" alt="Dr. Edwin García" />
                </Link>

                <button
                    className={styles.hamburguesa}
                    onClick={() => setMenuMovil(!menuMovil)}
                    aria-label="Abrir menú"
                >
                    {menuMovil ? '✕' : '☰'}
                </button>

                {/* Enlaces: se muestran/ocultan en móvil según menuMovil */}
                <div className={`${styles.enlaces} ${menuMovil ? styles.enlacesAbierto : ''}`}>
                    <Link to="/" onClick={() => setMenuMovil(false)}>Inicio</Link>
                    <Link to="/sobre-mi" onClick={() => setMenuMovil(false)}>Sobre mí</Link>

                    {/* Dropdown de servicios (solo aplica en escritorio) */}
                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setMenuAbierto(true)}
                        onMouseLeave={() => setMenuAbierto(false)}
                    >
                        <Link to="/servicios" onClick={() => setMenuMovil(false)}>Servicios</Link>

                        {menuAbierto && (
                            <div className={styles.dropdownMenu}>
                                {servicios.map((s) => (
                                    <Link
                                        key={s.slug}
                                        to={`/servicios/${s.slug}`}
                                        className={styles.dropdownItem}
                                    >
                                        {s.titulo}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link to="/contacto" className={styles.botonCita}>
                        Agendar cita
                    </Link>

                </div>
            </nav>

            <main className={styles.contenido}>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout