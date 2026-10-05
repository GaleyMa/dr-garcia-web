import { Link } from 'react-router-dom'
import styles from './FAQ.module.css'

const grupos = [
  {
    numero: '01',
    titulo: 'Sobre la consulta',
    preguntas: [
      ['¿Dónde consulta el Dr. Edwin García Garrido?', 'La consulta privada se realiza en Torre Médica Otay, en Tijuana, Baja California.'],
      ['¿Qué especialidad tiene el Dr. Edwin García Garrido?', 'Es médico especialista en Cirugía General y está certificado por el Consejo Mexicano de Cirugía General.'],
      ['¿Una consulta significa que necesariamente necesito cirugía?', 'No. La indicación de cirugía depende del diagnóstico, los síntomas, los estudios y las características de cada paciente. La valoración permite revisar el caso y explicar las alternativas de manejo.'],
      ['¿La primera consulta puede servir para revisar estudios que ya tengo?', 'Sí. Si cuentas con estudios relacionados con el motivo de consulta, pueden ser útiles para revisar el caso durante la valoración.'],
    ],
  },
  {
    numero: '02',
    titulo: 'Cirugía General',
    preguntas: [
      ['¿Qué problemas se pueden valorar en consulta?', 'Entre las principales áreas de atención privada se encuentran enfermedades de la vesícula, hernias, padecimientos quirúrgicos de tiroides y lipomas. El trauma y las urgencias quirúrgicas forman parte de su experiencia profesional.'],
      ['¿Qué es una valoración quirúrgica?', 'Es una consulta en la que se revisan síntomas, antecedentes, exploración y estudios disponibles para determinar si existe una indicación de cirugía o si corresponde otro tipo de manejo.'],
      ['¿El Dr. Edwin García Garrido realiza cirugía laparoscópica?', 'La laparoscopia forma parte de sus áreas de práctica. El abordaje apropiado depende del padecimiento, el diagnóstico y las características de cada paciente.'],
      ['¿Dónde puedo leer información sobre cada área de atención?', 'La sección de Cirugía General reúne información específica sobre vesícula, hernias, tiroides, lipomas y trauma y urgencias quirúrgicas.'],
    ],
  },
  {
    numero: '03',
    titulo: 'Antes de acudir',
    preguntas: [
      ['¿Qué debo llevar a una valoración?', 'Si cuentas con estudios, análisis, ultrasonidos, reportes médicos u otra información relacionada con el motivo de consulta, es útil tenerlos disponibles para su revisión.'],
      ['¿Puedo utilizar este sitio para una emergencia médica?', 'No. Ante una emergencia o síntomas graves se debe acudir a un servicio de urgencias apropiado. El sitio y la agenda de consulta privada no sustituyen la atención de urgencias.'],
      ['¿Puedo solicitar una valoración desde el sitio?', 'La sección de contacto permite consultar la información disponible para solicitar una valoración privada en Torre Médica Otay.'],
    ],
  },
]

function FAQ() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`contenedor ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>Información para pacientes</span>
            <h1>Preguntas<br />frecuentes</h1>
          </div>
          <div className={styles.heroIntro}>
            <span className={styles.questionMark} aria-hidden="true">?</span>
            <p>Respuestas generales sobre consulta, Cirugía General y preparación para una valoración con el Dr. Edwin García Garrido.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.indexSection} seccion`}>
        <div className={`contenedor ${styles.indexGrid}`}>
          <div>
            <span className={styles.label}>Índice</span>
            <h2>Encuentra una respuesta</h2>
          </div>
          <nav className={styles.topicIndex} aria-label="Temas de preguntas frecuentes">
            {grupos.map((grupo) => (
              <a href={`#faq-${grupo.numero}`} key={grupo.numero}>
                <span>{grupo.numero}</span>
                <strong>{grupo.titulo}</strong>
                <i>↓</i>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className={styles.questionsSection}>
        <div className="contenedor">
          {grupos.map((grupo) => (
            <section className={styles.group} id={`faq-${grupo.numero}`} key={grupo.numero}>
              <header className={styles.groupHeader}>
                <span>{grupo.numero}</span>
                <h2>{grupo.titulo}</h2>
              </header>
              <div className={styles.questions}>
                {grupo.preguntas.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className={styles.help}>
        <div className={`contenedor ${styles.helpGrid}`}>
          <div>
            <span className={styles.label}>¿No encontraste tu duda?</span>
            <h2>Cada caso requiere una valoración individual.</h2>
          </div>
          <div className={styles.helpAction}>
            <p>Para dudas relacionadas con una posible valoración de Cirugía General, consulta la información de contacto y ubicación.</p>
            <Link to="/contacto">Ir a contacto <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
