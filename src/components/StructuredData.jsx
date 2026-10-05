import { useEffect } from 'react'

const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Edwin García Garrido',
  description: 'Médico especialista en Cirugía General con consulta privada en Tijuana, Baja California.',
  email: 'mailto:dr.edwin.cirugia@gmail.com',
  medicalSpecialty: 'Surgical',
  knowsLanguage: ['es', 'en'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aeropuerto 16000',
    addressLocality: 'Tijuana',
    addressRegion: 'Baja California',
    postalCode: '22425',
    addressCountry: 'MX',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad Autónoma de Baja California',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad Juárez Autónoma de Tabasco',
    },
  ],
}

function StructuredData() {
  useEffect(() => {
    const id = 'doctor-structured-data'
    let script = document.getElementById(id)

    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(doctorSchema)

    return () => script.remove()
  }, [])

  return null
}

export default StructuredData
