function Contact() {
    return (
        <>
            <section className="seccion">
                <div className="contenedor">
                    <h2>Agenda una cita</h2>
                    <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ28D4_qY52NfOMtokKb6qr-Va6F96pBVgAVCNtPdWXZFg719dGqOBFiEendcqSNBOb9omPsBkIn?gv=true"
                        style={{ border: 0 }}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        title="Agenda de citas del Dr. Edwin García"
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact