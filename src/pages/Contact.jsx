import styles from './Contact.module.css'

function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`contenedor ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>Consulta privada · Tijuana</span>
            <h1>Consulta<br />disponibilidad</h1>
          </div>
          <div className={styles.heroIntro}>
            <span>Valoración de Cirugía General</span>
            <p>Revisa la disponibilidad de citas con el Dr. Edwin García Garrido en Torre Médica Otay.</p>
          </div>
        </div>
        <span className={styles.heroRing} aria-hidden="true" />
      </section>

      <section className={`${styles.process} seccion`}>
        <div className="contenedor">
          <div className={styles.processHead}>
            <span className={styles.label}>Antes de agendar</span>
            <h2>Una valoración empieza<br />por entender tu caso.</h2>
          </div>
          <div className={styles.steps}>
            <article><span>01</span><h3>Revisa la disponibilidad</h3><p>Consulta los espacios disponibles directamente en la agenda de esta página.</p></article>
            <article><span>02</span><h3>Solicita tu cita</h3><p>Selecciona una fecha disponible y completa la información solicitada por la agenda.</p></article>
            <article><span>03</span><h3>Prepara tus estudios</h3><p>Si ya cuentas con estudios, análisis o reportes relacionados con tu motivo de consulta, tenlos disponibles para la valoración.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.bookingSection}>
        <div className={`contenedor ${styles.bookingGrid}`}>
          <aside className={styles.contactInfo}>
            <span className={styles.label}>Consulta privada</span>
            <h2>Torre Médica<br />Otay</h2>

            <div className={styles.detail}>
              <span>Ubicación</span>
              <p>Aeropuerto 16000<br />La Pechuga, 22425<br />Tijuana, B.C.</p>
            </div>

            <div className={styles.detail}>
              <span>Correo</span>
              <a href="mailto:dr.edwin.cirugia@gmail.com">dr.edwin.cirugia@gmail.com</a>
            </div>

            <div className={styles.detail}>
              <span>Teléfono</span>
              {/* TODO: reemplazar por el número real antes de producción */}
              <span className={styles.phonePlaceholder}>+52 664 000 0000 <small>· provisional</small></span>
            </div>

            <div className={styles.locationGraphic} aria-hidden="true">
              <i />
              <span>TIJ</span>
            </div>
          </aside>

          <div className={styles.calendarArea}>
            <div className={styles.calendarHead}>
              <div>
                <span className={styles.label}>Agenda</span>
                <h2>Disponibilidad de citas</h2>
              </div>
              <span className={styles.calendarMark} aria-hidden="true">+</span>
            </div>
            <div className={styles.calendar}>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ28D4_qY52NfOMtokKb6qr-Va6F96pBVgAVCNtPdWXZFg719dGqOBFiEendcqSNBOb9omPsBkIn?gv=true"
                width="100%"
                height="650"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Agenda de citas del Dr. Edwin García Garrido"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.notice}>
        <div className={`contenedor ${styles.noticeInner}`}>
          <span>!</span>
          <div>
            <strong>La agenda corresponde a consulta privada programada.</strong>
            <p>Si presentas una emergencia o síntomas graves, no esperes una cita programada y busca atención inmediata en un servicio de urgencias apropiado.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
