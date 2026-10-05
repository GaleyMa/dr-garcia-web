import { Link } from 'react-router-dom'
import styles from './ServiceDetail.module.css'

function GallbladderSurgery() {
  return (
    <>
      <section className={styles.serviceHero}>
        <div className={`contenedor ${styles.serviceHeroGrid}`}>
          <div>
            <span className={styles.serviceEyebrow}>Cirugía General · Tijuana</span>
            <h1>Cirugía de<br />vesícula</h1>
          </div>
          <div className={styles.serviceHeroMeta}>
            <div className={styles.areaCount}>
              <span>Área de atención</span>
              <strong>01 <i>/ 05</i></strong>
            </div>
            <p>Valoración de problemas de la vesícula y vía biliar con el Dr. Edwin García Garrido, Cirujano General.</p>
          </div>
        </div>
        <span className={styles.serviceHeroRing} aria-hidden="true" />
      </section>

      <section className={`${styles.serviceIntro} seccion`}>
        <div className={`contenedor ${styles.serviceIntroGrid}`}>
          <div className={styles.serviceIntroCopy}>
            <span className={styles.sectionLabel}>Vesícula y vía biliar</span>
            <h2>Problemas frecuentes de la vesícula</h2>
            <p>Los cálculos biliares, también llamados colelitiasis, pueden permanecer sin síntomas o provocar molestias. Cuando existen síntomas recurrentes o complicaciones, la valoración médica ayuda a determinar el manejo apropiado.</p>

            <div className={styles.symptomBlock}>
              <span className={styles.blockNumber}>01</span>
              <div>
                <h3>¿Qué síntomas pueden motivar una valoración?</h3>
                <p>Algunos problemas de la vesícula pueden presentarse con dolor en la parte superior derecha o central del abdomen, en ocasiones después de comer, y pueden acompañarse de náusea o vómito. Los síntomas pueden tener otras causas, por lo que es importante establecer el diagnóstico antes de decidir un tratamiento.</p>
              </div>
            </div>
          </div>

          <figure className={styles.editorialFigure}>
            <div className={styles.figureFrame}>
              <div className={styles.figureOrbit} aria-hidden="true"><i /></div>
              <div className={styles.figurePlaceholder} role="img" aria-label="Espacio reservado para ilustración anatómica de la vesícula y vías biliares">
                <span>Ilustración anatómica</span>
                <strong>Vesícula + vía biliar</strong>
              </div>
              <span className={styles.figureCross} aria-hidden="true">+</span>
            </div>
            <figcaption>Anatomía de la vesícula y la vía biliar.</figcaption>
          </figure>
        </div>

        <div className={`contenedor ${styles.urgentNote}`}>
          <span className={styles.urgentMark}>!</span>
          <div>
            <strong>Atención oportuna</strong>
            <p>Dolor abdominal intenso o persistente acompañado de fiebre, escalofríos, vómitos importantes o coloración amarilla de la piel o los ojos requiere atención médica oportuna. La consulta programada de este sitio no sustituye un servicio de urgencias.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.serviceInfo} seccion`}>
        <div className="contenedor">
          <div className={styles.serviceInfoHead}>
            <span className={styles.sectionLabel}>Valoración y tratamiento</span>
            <h2>Del diagnóstico a las alternativas de manejo</h2>
          </div>

          <div className={styles.editorialInfoGrid}>
            <article>
              <span>01</span>
              <h3>¿Cómo se estudian los problemas de la vesícula?</h3>
              <p>La valoración comienza con los síntomas y antecedentes del paciente. Según el caso, el médico puede revisar o solicitar estudios de imagen y análisis de laboratorio. El ultrasonido abdominal es uno de los estudios utilizados para identificar cálculos y valorar la vesícula.</p>
            </article>
            <article>
              <span>02</span>
              <h3>¿Cuándo puede considerarse una cirugía?</h3>
              <p>Encontrar cálculos en la vesícula no significa automáticamente que una persona necesite una operación. La indicación quirúrgica depende de los síntomas, los hallazgos de los estudios, posibles complicaciones y las características de cada paciente.</p>
            </article>
            <article>
              <span>03</span>
              <h3>¿Qué es una colecistectomía?</h3>
              <p>La colecistectomía es la cirugía para retirar la vesícula biliar. El abordaje laparoscópico es una técnica utilizada habitualmente cuando está indicada, pero el procedimiento apropiado debe decidirse de manera individual después de la valoración.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.editorialFaq} seccion`}>
        <div className={`contenedor ${styles.editorialFaqGrid}`}>
          <div className={styles.faqIntro}>
            <span className={styles.sectionLabel}>Preguntas frecuentes</span>
            <h2>Dudas comunes sobre la cirugía de vesícula</h2>
            <p>Información general para entender mejor la valoración y el tratamiento de los problemas de la vesícula.</p>
            <span className={styles.faqGraphic} aria-hidden="true">?</span>
          </div>
          <div className={styles.editorialFaqs}>
            <details>
              <summary>¿Todos los cálculos en la vesícula necesitan cirugía?</summary>
              <p>No. La necesidad de tratamiento depende de los síntomas, los estudios, las complicaciones y la valoración individual.</p>
            </details>
            <details>
              <summary>¿Qué es una colecistectomía?</summary>
              <p>Es la operación mediante la cual se retira la vesícula biliar.</p>
            </details>
            <details>
              <summary>¿Se puede vivir sin vesícula?</summary>
              <p>Sí. La vesícula almacena bilis, pero no es indispensable para que el hígado continúe produciéndola y esta llegue al intestino.</p>
            </details>
            <details>
              <summary>¿Debo llevar mis estudios a la consulta?</summary>
              <p>Si ya cuentas con ultrasonidos, análisis u otros estudios relacionados con tus síntomas, pueden ser útiles durante la valoración.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.serviceConsult}>
        <div className={`contenedor ${styles.serviceConsultGrid}`}>
          <div>
            <span className={styles.serviceEyebrow}>Consulta de Cirugía General</span>
            <h2>Valoración de vesícula<br />en Tijuana</h2>
          </div>
          <div className={styles.consultCopy}>
            <p>El Dr. Edwin García Garrido brinda consulta privada en Torre Médica Otay. Durante la consulta se revisa cada caso para explicar las alternativas de manejo de acuerdo con el diagnóstico.</p>
            <div className={styles.consultActions}>
              <Link to="/contacto" className={styles.consultButton}>Consultar disponibilidad</Link>
              <Link to="/dr-edwin-garcia-garrido">Conocer trayectoria →</Link>
            </div>
          </div>
        </div>
      </section>

      <nav className={styles.serviceNav} aria-label="Navegación entre áreas de atención">
        <div className={`contenedor ${styles.serviceNavInner}`}>
          <Link to="/cirugia-general">← Cirugía General</Link>
          <Link to="/cirugia-de-hernia"><span>Siguiente área · 02 / 05</span><strong>Cirugía de hernia →</strong></Link>
        </div>
      </nav>

      <div className={`contenedor ${styles.serviceDisclaimer}`}>
        Información general para pacientes. Este contenido no sustituye una valoración médica individual.
      </div>
    </>
  )
}

export default GallbladderSurgery
