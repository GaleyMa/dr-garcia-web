import { Link } from 'react-router-dom'
import { IconBrandFacebook, IconBrandInstagram, IconExternalLink } from '@tabler/icons-react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.main}`}>
        <div className={styles.identity}>
          <img src="/logo-footer.png" alt="Dr. Edwin García Garrido" className={styles.logo} />
          <p>Cirugía General · Tijuana, Baja California</p>
          <div className={styles.socials} aria-label="Perfiles profesionales">
            <a href="https://www.instagram.com/dr.edwingarcia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram del Dr. Edwin García Garrido"><IconBrandInstagram size={21} stroke={1.6} /></a>
            <a href="https://www.facebook.com/people/Dr-Edwin-Garcia/61581486067814/" target="_blank" rel="noopener noreferrer" aria-label="Facebook del Dr. Edwin García Garrido"><IconBrandFacebook size={21} stroke={1.6} /></a>
            <a className={styles.doctoralia} href="https://www.doctoralia.com.mx/edwin-garcia-garrido/cirujano-general/tijuana" target="_blank" rel="noopener noreferrer" aria-label="Perfil del Dr. Edwin García Garrido en Doctoralia"><span>D</span><IconExternalLink size={12} stroke={1.7} /></a>
          </div>
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Navegación</span>
          <Link to="/dr-edwin-garcia-garrido">Sobre el doctor</Link>
          <Link to="/cirugia-general">Cirugía General</Link>
          <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
          <Link to="/contacto">Contacto y citas</Link>
        </div>

        <div className={styles.column}>
          <span className={styles.heading}>Áreas de atención</span>
          <Link to="/cirugia-de-vesicula">Vesícula</Link>
          <Link to="/cirugia-de-hernia">Hernias</Link>
          <Link to="/cirugia-de-tiroides">Tiroides</Link>
          <Link to="/lipomas">Lipomas</Link>
          <Link to="/trauma-y-urgencias">Trauma y urgencias</Link>
        </div>

        <div className={styles.contact}>
          <span className={styles.heading}>Consulta privada</span>
          <strong>Torre Médica Otay</strong>
          <address>Aeropuerto 16000<br />La Pechuga, 22425<br />Tijuana, B.C.</address>
          <a href="mailto:dr.edwin.cirugia@gmail.com">dr.edwin.cirugia@gmail.com</a>
          <span className={styles.phone}>+52 664 000 0000 <small>· provisional</small></span>
        </div>
      </div>

      <div className={styles.medicalNotice}>
        <div className="contenedor">
          <span>Información médica</span>
          <p>El contenido de este sitio es informativo y no sustituye una valoración médica individual. Ante una emergencia o síntomas graves, busca atención inmediata en un servicio de urgencias apropiado.</p>
        </div>
      </div>

      <div className={`contenedor ${styles.legal}`}>
        <p>© {new Date().getFullYear()} Dr. Edwin García Garrido. Todos los derechos reservados.</p>
        <nav aria-label="Información legal">
          <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
          <Link to="/terminos-de-uso">Términos de uso</Link>
          <Link to="/aviso-medico">Aviso médico</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
