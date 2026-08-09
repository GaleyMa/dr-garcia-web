import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout() {
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
                    <Link to="/sobre-el-doctor">Sobre el doctor</Link>
                    <Link to="/servicios">Servicios</Link>
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