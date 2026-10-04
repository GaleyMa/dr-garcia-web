import { Link } from 'react-router-dom'
import styles from './ServiceDetail.module.css'

function TraumaEmergencySurgery() {
  return (
    <>
      <section className={styles.hero}><div className="contenedor"><span className={styles.eyebrow}>Cirugía General · Tijuana</span><h1 className={styles.titulo}>Trauma y urgencias quirúrgicas</h1><p className={styles.resumen}>Información sobre el ámbito de trauma y urgencias dentro de la Cirugía General y la experiencia profesional del Dr. Edwin García Garrido.</p></div></section>
      <section className={`${styles.bloque} seccion`}><div className="contenedor">
        <div className={styles.introGrid}><div>
          <h2 className={styles.encabezado}>Atención quirúrgica urgente</h2>
          <p className={styles.parrafo}>Algunos cuadros abdominales y lesiones pueden requerir evaluación médica inmediata y, en determinados casos, tratamiento quirúrgico. La prioridad ante una posible urgencia es recibir atención en un servicio con capacidad para evaluación y manejo inmediato.</p>
          <h2 className={styles.encabezado}>¿Cuándo no esperar una consulta programada?</h2>
          <p className={styles.parrafo}>Dolor intenso o de inicio súbito, sangrado importante, dificultad para respirar, pérdida del estado de alerta, lesiones graves o un deterioro rápido son situaciones en las que no debe esperarse una cita de consulta privada.</p>
          <aside className={styles.alerta}><strong>Esta página no es un servicio de urgencias</strong><p>Si existe una emergencia o síntomas graves, busca atención inmediata en el servicio de urgencias más apropiado de tu localidad.</p></aside>
        </div>
        <figure className={styles.figuraMedica}><div className={styles.imagenPlaceholder} role="img" aria-label="Ilustración conceptual de evaluación quirúrgica de urgencia"><span>Ilustración médica</span><strong>Trauma y evaluación quirúrgica</strong></div><figcaption>El manejo depende del tipo de lesión o cuadro clínico y de su gravedad.</figcaption></figure></div>

        <div className={styles.infoGrid}>
          <article className={styles.infoItem}><h2>¿Qué papel tiene Cirugía General?</h2><p>La Cirugía General participa en la valoración y manejo de diversos cuadros que pueden requerir intervención quirúrgica, especialmente problemas abdominales y determinados traumatismos.</p></article>
          <article className={styles.infoItem}><h2>¿Por qué importa la valoración inmediata?</h2><p>En una urgencia, la exploración, los signos vitales y los estudios disponibles permiten determinar prioridades y decidir el manejo apropiado según la condición del paciente.</p></article>
          <article className={styles.infoItem}><h2>Experiencia profesional</h2><p>El trauma y las urgencias quirúrgicas forman parte de las áreas de experiencia profesional del Dr. Edwin García Garrido dentro del campo de la Cirugía General.</p></article>
        </div>

        <section className={styles.faqSection}><div className={styles.faqIntro}><span className={styles.sectionLabel}>Preguntas frecuentes</span><h2>Sobre trauma y urgencias quirúrgicas</h2><p>Orientación general para distinguir una consulta programada de una situación que requiere atención inmediata.</p></div><div className={styles.faqs}>
          <details className={styles.faq}><summary>¿Puedo agendar una cita si tengo una emergencia?</summary><p>Una cita programada no sustituye la atención de urgencias. Ante síntomas graves o una lesión importante, busca atención inmediata.</p></details>
          <details className={styles.faq}><summary>¿Todo dolor abdominal es una urgencia quirúrgica?</summary><p>No. El dolor abdominal tiene muchas causas, pero un dolor intenso, persistente o acompañado de deterioro importante requiere valoración médica oportuna.</p></details>
          <details className={styles.faq}><summary>¿Trauma forma parte de Cirugía General?</summary><p>La valoración y manejo de determinados traumatismos forma parte de la práctica y formación de Cirugía General.</p></details>
        </div></section>

        <section className={styles.valoracion}><div className={styles.valoracionTexto}><span className={styles.sectionLabel}>Consulta de Cirugía General</span><h2>Consulta quirúrgica en Tijuana</h2><p>Para problemas no emergentes que requieren valoración por Cirugía General, el Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay, Tijuana.</p></div><div className={styles.valoracionAcciones}><Link to="/contacto" className={styles.boton}>Consultar disponibilidad</Link><Link to="/dr-edwin-garcia-garrido" className={styles.enlace}>Conocer al Dr. Edwin García Garrido →</Link></div></section>
        <p className={styles.revision}>Información general para pacientes. Este sitio no proporciona atención de urgencias ni sustituye una evaluación médica inmediata.</p>
      </div></section>
    </>
  )
}
export default TraumaEmergencySurgery
