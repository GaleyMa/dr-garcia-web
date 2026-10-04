import { Link } from 'react-router-dom'
import styles from './InfoPage.module.css'

const preguntas = [
  {
    q: '¿Dónde consulta el Dr. Edwin García Garrido?',
    a: 'La consulta privada se realiza en Torre Médica Otay, en Tijuana, Baja California.',
  },
  {
    q: '¿Qué especialidad tiene el Dr. Edwin García Garrido?',
    a: 'Es médico especialista en Cirugía General y está certificado por el Consejo Mexicano de Cirugía General.',
  },
  {
    q: '¿Qué problemas se pueden valorar en consulta?',
    a: 'Entre sus principales áreas de atención privada se encuentran enfermedades de la vesícula, hernias, padecimientos quirúrgicos de tiroides y lipomas. También cuenta con experiencia en trauma y urgencias quirúrgicas.',
  },
  {
    q: '¿Una consulta significa que necesariamente necesito cirugía?',
    a: 'No. La indicación de cirugía depende del diagnóstico, los síntomas, los estudios y las características de cada paciente. La valoración permite revisar el caso y explicar las alternativas de manejo.',
  },
  {
    q: '¿Puedo utilizar este sitio para una emergencia médica?',
    a: 'No. Ante una emergencia o síntomas graves se debe acudir al servicio de urgencias más cercano. El sitio y la agenda de consulta privada no sustituyen la atención de urgencias.',
  },
]

function FAQ() {
  return (
    <>
      <section className={styles.hero}>
        <div className="contenedor">
          <span className={styles.eyebrow}>Información para pacientes</span>
          <h1>Preguntas frecuentes</h1>
          <p>Información general sobre la consulta privada y las áreas de atención del Dr. Edwin García Garrido.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor">
          <div className={styles.content}>
            {preguntas.map(({ q, a }) => (
              <div className={styles.faq} key={q}>
                <h2>{q}</h2>
                <p>{a}</p>
              </div>
            ))}
            <p><Link className={styles.cta} to="/contacto">Ir a contacto y citas</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
