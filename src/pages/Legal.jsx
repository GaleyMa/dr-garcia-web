import styles from './Legal.module.css'

const content = {
  privacy: {
    eyebrow: 'Privacidad',
    title: 'Aviso de privacidad',
    intro: 'Información general sobre el tratamiento de datos al utilizar este sitio y los medios de contacto disponibles.',
    sections: [
      ['Responsable', 'Este sitio corresponde a la presencia profesional del Dr. Edwin García Garrido, Cirujano General en Tijuana, Baja California.'],
      ['Datos y contacto', 'Los datos que una persona proporcione voluntariamente al solicitar información o una cita deben utilizarse únicamente para atender esa comunicación y gestionar la solicitud correspondiente.'],
      ['Servicios externos', 'La disponibilidad de citas puede mostrarse mediante servicios externos de agenda. El uso de dichos servicios puede estar sujeto a sus propias políticas de privacidad y condiciones.'],
      ['Actualizaciones', 'Este aviso deberá actualizarse cuando se incorporen nuevos formularios, herramientas de analítica, canales de contacto o mecanismos de tratamiento de datos.'],
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Términos de uso',
    intro: 'Condiciones generales para consultar la información publicada en este sitio.',
    sections: [
      ['Uso informativo', 'El contenido se proporciona con fines informativos y de orientación general. No constituye por sí mismo una consulta, diagnóstico, prescripción o relación médico-paciente.'],
      ['Disponibilidad', 'La información, servicios y disponibilidad de citas pueden modificarse. Una solicitud enviada mediante el sitio no debe interpretarse como atención de una urgencia médica.'],
      ['Contenido', 'Los textos, elementos gráficos e identidad del sitio están destinados a la comunicación profesional del Dr. Edwin García Garrido, salvo aquellos materiales que pertenezcan a terceros.'],
    ],
  },
  medical: {
    eyebrow: 'Información médica',
    title: 'Aviso médico',
    intro: 'La información de salud publicada en este sitio no sustituye una valoración médica individual.',
    sections: [
      ['Información general', 'Los contenidos describen de manera general áreas de Cirugía General, posibles motivos de valoración y alternativas que pueden considerarse según cada caso.'],
      ['Decisiones médicas', 'La necesidad de estudios, tratamiento o cirugía depende de la historia clínica, exploración, diagnóstico y circunstancias individuales de cada paciente.'],
      ['Urgencias', 'Este sitio y su agenda corresponden a consulta privada programada. Ante una emergencia, síntomas graves o deterioro rápido, busca atención inmediata en un servicio de urgencias apropiado.'],
    ],
  },
}

function Legal({ type }) {
  const page = content[type]
  return (
    <>
      <section className={styles.hero}><div className="contenedor"><span>{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className={styles.body}><div className="contenedor"><div className={styles.content}>{page.sections.map(([title,text], index) => <section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div><p className={styles.note}>Documento informativo del sitio. Su contenido puede actualizarse conforme se definan los servicios y herramientas utilizados en producción.</p></div></section>
    </>
  )
}

export default Legal
