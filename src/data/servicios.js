export const servicios = [
  {
    slug: 'cirugia-de-vesicula',
    legacySlug: 'vesicula',
    titulo: 'Cirugía de vesícula',
    nombreMedico: 'Colecistectomía',
    imagen: '/servicios/vesicula.jpg',
    resumen: 'Valoración y tratamiento quirúrgico de enfermedades de la vesícula y la vía biliar, incluyendo colelitiasis y colecistitis.',
    temas: ['Colelitiasis', 'Cálculos biliares', 'Colecistitis', 'Enfermedad de la vesícula biliar'],
  },
  {
    slug: 'cirugia-de-hernia',
    legacySlug: 'hernias',
    titulo: 'Cirugía de hernia',
    imagen: '/servicios/hernias.jpg',
    resumen: 'Valoración y tratamiento quirúrgico de hernias, incluyendo hernia inguinal y hernia umbilical.',
    temas: ['Hernia inguinal', 'Hernia umbilical', 'Hernias de la pared abdominal'],
  },
  {
    slug: 'lipomas',
    legacySlug: 'lipomas',
    titulo: 'Lipomas',
    imagen: '/servicios/lipomas.jpg',
    resumen: 'Valoración quirúrgica de lipomas y orientación sobre cuándo puede estar indicada su extirpación.',
    temas: ['Valoración de lipomas', 'Extirpación de lipomas'],
  },
  {
    slug: 'cirugia-de-tiroides',
    legacySlug: 'tiroides',
    titulo: 'Cirugía de tiroides',
    imagen: '/servicios/tiroides.jpg',
    resumen: 'Valoración quirúrgica de padecimientos de la tiroides, como nódulos y bocio, cuando requieren manejo por cirugía general.',
    temas: ['Nódulo tiroideo', 'Bocio', 'Tumor tiroideo'],
  },
  {
    slug: 'trauma-y-urgencias',
    legacySlug: 'trauma-urgencias',
    titulo: 'Trauma y urgencias quirúrgicas',
    imagen: '/servicios/trauma-urgencias.jpg',
    resumen: 'Experiencia en valoración y manejo quirúrgico de trauma y urgencias dentro del ámbito de la cirugía general.',
    temas: ['Abdomen agudo', 'Trauma', 'Urgencias quirúrgicas'],
    avisoUrgencia: true,
  },
]

export function buscarServicio(slug) {
  return servicios.find((servicio) =>
    servicio.slug === slug || servicio.legacySlug === slug
  )
}
