import { Link } from 'react-router-dom'
import styles from './ServiceDetail.module.css'

function GallbladderSurgery() {
  return (
    <>
      <section className={styles.hero}>
        <div className="contenedor">
          <span className={styles.eyebrow}>Cirugía General · Tijuana</span>
          <h1 className={styles.titulo}>Cirugía de vesícula en Tijuana</h1>
          <p className={styles.resumen}>Información sobre valoración de vesícula y consulta con el Dr. Edwin García Garrido, Cirujano General.</p>
        </div>
      </section>
      <section className={`${styles.bloque} seccion`}>
        <div className="contenedor">
          <div className={styles.contenido}>
            <h2 className={styles.encabezado}>Problemas frecuentes de la vesícula</h2>
            <p className={styles.parrafo}>Los cálculos biliares, también llamados colelitiasis, pueden permanecer sin síntomas o provocar molestias. Cuando existen síntomas recurrentes o complicaciones, la valoración médica ayuda a determinar el manejo apropiado.</p>

            <h2 className={styles.encabezado}>¿Qué síntomas pueden motivar una valoración?</h2>
            <p className={styles.parrafo}>Algunos problemas de la vesícula pueden presentarse con dolor en la parte superior derecha o central del abdomen, en ocasiones después de comer, y pueden acompañarse de náusea o vómito. Los síntomas pueden tener otras causas, por lo que es importante establecer el diagnóstico antes de decidir un tratamiento.</p>

            <h2 className={styles.encabezado}>¿Cómo se estudian los problemas de la vesícula?</h2>
            <p className={styles.parrafo}>La valoración comienza con los síntomas y antecedentes del paciente. Según el caso, el médico puede revisar o solicitar estudios de imagen y análisis de laboratorio. El ultrasonido abdominal es uno de los estudios utilizados para identificar cálculos y valorar la vesícula.</p>

            <h2 className={styles.encabezado}>¿Cuándo puede considerarse una cirugía?</h2>
            <p className={styles.parrafo}>Encontrar cálculos en la vesícula no significa automáticamente que una persona necesite una operación. La indicación quirúrgica depende de los síntomas, los hallazgos de los estudios, posibles complicaciones y las características de cada paciente.</p>

            <h2 className={styles.encabezado}>Colecistectomía</h2>
            <p className={styles.parrafo}>La colecistectomía es la cirugía para retirar la vesícula biliar. El abordaje laparoscópico es una técnica utilizada habitualmente cuando está indicada, pero el procedimiento apropiado debe decidirse de manera individual después de la valoración.</p>

            <h2 className={styles.encabezado}>¿Cuándo acudir a urgencias?</h2>
            <p className={styles.parrafo}>Un dolor abdominal intenso o persistente, especialmente acompañado de fiebre, escalofríos, vómitos importantes o coloración amarilla de la piel o los ojos, requiere atención médica oportuna. La consulta programada de este sitio no sustituye un servicio de urgencias.</p>

            <h2 className={styles.encabezado}>Preguntas frecuentes</h2>
            <div className={styles.faqs}>
              <details className={styles.faq}>
                <summary>¿Todos los cálculos en la vesícula necesitan cirugía?</summary>
                <p>No. La necesidad de tratamiento depende de los síntomas, los estudios, las complicaciones y la valoración individual.</p>
              </details>
              <details className={styles.faq}>
                <summary>¿Qué es una colecistectomía?</summary>
                <p>Es la operación mediante la cual se retira la vesícula biliar.</p>
              </details>
              <details className={styles.faq}>
                <summary>¿Se puede vivir sin vesícula?</summary>
                <p>Sí. La vesícula almacena bilis, pero no es indispensable para que el hígado continúe produciéndola y esta llegue al intestino.</p>
              </details>
              <details className={styles.faq}>
                <summary>¿Debo llevar mis estudios a la consulta?</summary>
                <p>Si ya cuentas con ultrasonidos, análisis u otros estudios relacionados con tus síntomas, pueden ser útiles durante la valoración.</p>
              </details>
            </div>

            <h2 className={styles.encabezado}>Valoración de vesícula en Tijuana</h2>
            <p className={styles.parrafo}>El Dr. Edwin García Garrido, especialista en Cirugía General, brinda consulta privada en Torre Médica Otay, Tijuana. Durante la consulta se revisa cada caso para explicar las alternativas de manejo de acuerdo con el diagnóstico.</p>
            <div className={styles.acciones}>
              <Link to="/contacto" className={styles.boton}>Agendar valoración</Link>
              <Link to="/dr-edwin-garcia-garrido" className={styles.enlace}>Conocer al Dr. Edwin García Garrido →</Link>
            </div>
            <p className={styles.revision}>Información general para pacientes. Este contenido no sustituye una valoración médica individual.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default GallbladderSurgery
