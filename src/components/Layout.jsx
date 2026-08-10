import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import styles from './Layout.module.css'
import { useState } from 'react'
import { servicios } from '../data/servicios'

function Layout() {
    const [menuAbierto, setMenuAbierto] = useState(false)

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

                <div className={styles.enlaces}>
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre-mi">Sobre mí</Link>

                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setMenuAbierto(true)}
                        onMouseLeave={() => setMenuAbierto(false)}
                    >
                        <Link to="/servicios">Servicios</Link>

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

                    <Link to="/contacto">Contacto</Link>
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