import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contenido}>
                <div className={styles.info}>
                    <img src="/logo-footer.png" alt="Dr. Edwin García" className={styles.logo} />
                </div>
                <div className={styles.redes}>
                    <a href="https://www.doctoralia.com.mx/edwin-garcia-garrido/cirujano-general/tijuana" target="_blank" rel="noopener noreferrer">
                        Doctoralia
                    </a>
                    <a href="https://www.facebook.com/people/Dr-Edwin-Garcia/61581486067814/" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/dr.edwingarcia/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
            <div className={styles.copy}>
                <p>© {new Date().getFullYear()} Dr. Edwin García. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer