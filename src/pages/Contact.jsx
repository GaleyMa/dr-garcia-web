import styles from './Contact.module.css'

function Contact() {
    return (
        <section className={styles.contacto}>
            <div className={`contenedor ${styles.grid}`}>
                {/* Columna izquierda: info */}
                <div className={styles.info}>
                    <span className={styles.eyebrow}>Contacto</span>
                    <h1 className={styles.titulo}>Agenda tu consulta</h1>
                    <p className={styles.intro}>
                        Reserva tu cita en línea o comunícate directamente. Estoy para
                        atenderte.
                    </p>

                    <div className={styles.datos}>
                        <div className={styles.dato}>
                            <span className={styles.datoLabel}>Correo</span>
                            <a href="mailto:dr.edwin.cirugia@gmail.com" className={styles.datoValor}>
                                dr.edwin.cirugia@gmail.com
                            </a>
                        </div>
                        <div className={styles.dato}>
                            <span className={styles.datoLabel}>Ubicación</span>
                            <span className={styles.datoValor}>Torre Médica Otay, Tijuana, B.C.</span>
                        </div>
                        <div className={styles.dato}>
                            <span className={styles.datoLabel}>Horario</span>
                            <span className={styles.datoValor}>Lun a Vie · 8:00 – 13:00</span>
                        </div>
                    </div>
                </div>

                {/* Columna derecha: agenda de Google */}
                <div className={styles.agenda}>
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ28D4_qY52NfOMtokKb6qr-Va6F96pBVgAVCNtPdWXZFg719dGqOBFiEendcqSNBOb9omPsBkIn?gv=true"
                        style={{ border: 0 }}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        title="Agenda de citas del Dr. Edwin García"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact