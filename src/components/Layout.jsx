import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import styles from './Layout.module.css'
import { useState } from 'react'
import { servicios } from '../data/servicios'

function Layout() {
    const [menuAbierto, setMenuAbierto] = useState(false)
    const [menuMovil, setMenuMovil] = useState(false)

    const cerrarMenus = () => {
        setMenuMovil(false)
        setMenuAbierto(false)
    }

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbarContenido}>
                    <a href="mailto:dr.edwin.cirugia@gmail.com" className={styles.topbarItem}>
                        dr.edwin.cirugia@gmail.com
                    </a>
                    <span className={styles.topbarItem}>Torre Médica Otay, Tijuana</span>
                </div>
            </div>

            <nav className={styles.nav} aria-label="Navegación principal">
                <Link to="/" className={styles.logo} onClick={cerrarMenus}>
                    <img src="/logo-barra-principal.png" alt="Dr. Edwin García Garrido, Cirujano General" />
                </Link>

                <button
                    className={styles.hamburguesa}
                    onClick={() => setMenuMovil(!menuMovil)}
                    aria-label={menuMovil ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuMovil}
                >
                    {menuMovil ? '✕' : '☰'}
                </button>

                <div className={`${styles.enlaces} ${menuMovil ? styles.enlacesAbierto : ''}`}>
                    <Link to="/" onClick={cerrarMenus}>Inicio</Link>
                    <Link to="/dr-edwin-garcia-garrido" onClick={cerrarMenus}>Sobre mí</Link>
                    <Link to="/cirugia-general" onClick={cerrarMenus}>Cirugía General</Link>

                    <div
                        className={styles.dropdown}
                        onMouseEnter={() => setMenuAbierto(true)}
                        onMouseLeave={() => setMenuAbierto(false)}
                    >
                        <Link to="/servicios" onClick={cerrarMenus}>Servicios</Link>

                        <div className={`${styles.dropdownMenu} ${menuAbierto ? styles.dropdownMenuAbierto : ''}`}>
                            {servicios.map((servicio) => (
                                <Link
                                    key={servicio.slug}
                                    to={`/${servicio.slug}`}
                                    className={styles.dropdownItem}
                                    onClick={cerrarMenus}
                                >
                                    {servicio.titulo}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/preguntas-frecuentes" onClick={cerrarMenus}>Preguntas frecuentes</Link>
                    <Link to="/contacto" onClick={cerrarMenus}>Contacto</Link>
                    <Link to="/contacto" className={styles.botonCita} onClick={cerrarMenus}>
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
