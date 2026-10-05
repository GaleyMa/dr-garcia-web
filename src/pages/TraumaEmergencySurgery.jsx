import { Link } from 'react-router-dom'
import styles from './ServiceDetail.module.css'

function TraumaEmergencySurgery() {
  return (
    <>
      <section className={styles.serviceHero}>
        <div className={`contenedor ${styles.serviceHeroGrid}`}>
          <div><span className={styles.serviceEyebrow}>Cirugía General · Tijuana</span><h1>Trauma y<br />urgencias</h1></div>
          <div className={styles.serviceHeroMeta}><div className={styles.areaCount}><span>Área de atención</span><strong>05 <i>/ 05</i></strong></div><p>Información sobre trauma y urgencias quirúrgicas dentro del campo profesional de la Cirugía General.</p></div>
        </div>
        <span className={styles.serviceHeroRing} aria-hidden="true" />
      </section>

      <section className={styles.emergencyBand}>
        <div className={`contenedor ${styles.emergencyBandInner}`}>
          <span className={styles.emergencySymbol}>!</span>
          <div><strong>Esta página no es un servicio de urgencias.</strong><p>Si existe una emergencia o síntomas graves, busca atención inmediata en el servicio de urgencias más apropiado de tu localidad.</p></div>
        </div>
      </section>

      <section className={`${styles.serviceIntro} seccion`}>
        <div className={`contenedor ${styles.serviceIntroGrid}`}>
          <div className={styles.serviceIntroCopy}>
            <span className={styles.sectionLabel}>Atención quirúrgica urgente</span>
            <h2>Hay situaciones en las que no se debe esperar una cita.</h2>
            <p>Algunos cuadros abdominales y lesiones pueden requerir evaluación médica inmediata y, en determinados casos, tratamiento quirúrgico. La prioridad ante una posible urgencia es recibir atención en un servicio con capacidad para evaluación y manejo inmediato.</p>
            <div className={styles.symptomBlock}><span className={styles.blockNumber}>!</span><div><h3>¿Cuándo no esperar una consulta programada?</h3><p>Dolor intenso o de inicio súbito, sangrado importante, dificultad para respirar, pérdida del estado de alerta, lesiones graves o un deterioro rápido son situaciones en las que no debe esperarse una cita de consulta privada.</p></div></div>
          </div>
          <figure className={styles.editorialFigure}><div className={styles.figureFrame}><div className={styles.figureOrbit} aria-hidden="true"><i /></div><div className={styles.figurePlaceholder} role="img" aria-label="Trauma y evaluación quirúrgica"><span>Ilustración médica</span><strong>Trauma + evaluación</strong></div><span className={styles.figureCross} aria-hidden="true">+</span></div><figcaption>El manejo depende del tipo de lesión o cuadro clínico y de su gravedad.</figcaption></figure>
        </div>
      </section>

      <section className={`${styles.serviceInfo} seccion`}>
        <div className="contenedor">
          <div className={styles.serviceInfoHead}><span className={styles.sectionLabel}>Cirugía General</span><h2>El papel del cirujano ante un cuadro urgente</h2></div>
          <div className={styles.traumaInfo}>
            <article><span>01</span><h3>Valoración</h3><p>La Cirugía General participa en la valoración y manejo de diversos cuadros que pueden requerir intervención quirúrgica, especialmente problemas abdominales y determinados traumatismos.</p></article>
            <article><span>02</span><h3>Prioridad clínica</h3><p>En una urgencia, la exploración, los signos vitales y los estudios disponibles permiten determinar prioridades y decidir el manejo apropiado según la condición del paciente.</p></article>
            <article><span>03</span><h3>Experiencia profesional</h3><p>El trauma y las urgencias quirúrgicas forman parte de las áreas de experiencia profesional del Dr. Edwin García Garrido dentro del campo de la Cirugía General.</p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.editorialFaq} seccion`}>
        <div className={`contenedor ${styles.editorialFaqGrid}`}>
          <div className={styles.faqIntro}><span className={styles.sectionLabel}>Preguntas frecuentes</span><h2>Trauma y urgencias quirúrgicas</h2><p>Orientación general para distinguir una consulta programada de una situación que requiere atención inmediata.</p><span className={styles.faqGraphic} aria-hidden="true">?</span></div>
          <div className={styles.editorialFaqs}>
            <details><summary>¿Puedo agendar una cita si tengo una emergencia?</summary><p>Una cita programada no sustituye la atención de urgencias. Ante síntomas graves o una lesión importante, busca atención inmediata.</p></details>
            <details><summary>¿Todo dolor abdominal es una urgencia quirúrgica?</summary><p>No. El dolor abdominal tiene muchas causas, pero un dolor intenso, persistente o acompañado de deterioro importante requiere valoración médica oportuna.</p></details>
            <details><summary>¿Trauma forma parte de Cirugía General?</summary><p>La valoración y manejo de determinados traumatismos forma parte de la práctica y formación de Cirugía General.</p></details>
          </div>
        </div>
      </section>

      <section className={styles.nonEmergencyConsult}>
        <div className={`contenedor ${styles.serviceConsultGrid}`}>
          <div><span className={styles.sectionLabel}>Solo problemas no emergentes</span><h2>Consulta quirúrgica<br />en Tijuana</h2></div>
          <div className={styles.nonEmergencyCopy}><p>Para problemas no emergentes que requieren valoración por Cirugía General, el Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay, Tijuana.</p><div className={styles.consultActions}><Link to="/contacto" className={styles.consultButton}>Consultar disponibilidad</Link><Link to="/dr-edwin-garcia-garrido">Conocer trayectoria →</Link></div></div>
        </div>
      </section>

      <nav className={styles.serviceNav} aria-label="Navegación entre áreas de atención"><div className={`contenedor ${styles.serviceNavInner}`}><Link to="/lipomas">← Lipomas · 04 / 05</Link><Link to="/cirugia-general"><span>Volver al índice</span><strong>Cirugía General →</strong></Link></div></nav>
      <div className={`contenedor ${styles.serviceDisclaimer}`}>Información general para pacientes. Este sitio no proporciona atención de urgencias ni sustituye una evaluación médica inmediata.</div>
    </>
  )
}
export default TraumaEmergencySurgery
