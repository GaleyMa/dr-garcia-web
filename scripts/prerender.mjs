import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const routes = [
  ['/', 'Dr. Edwin García Garrido | Cirujano General en Tijuana', 'Dr. Edwin García Garrido, Cirujano General en Tijuana. Consulta privada en Torre Médica Otay y atención en cirugía de vesícula, hernias, tiroides y lipomas.'],
  ['/dr-edwin-garcia-garrido', 'Dr. Edwin García Garrido | Cirujano General en Tijuana', 'Conoce la formación, certificación y experiencia profesional del Dr. Edwin García Garrido, Cirujano General en Tijuana.'],
  ['/cirugia-general', 'Cirujano General en Tijuana | Dr. Edwin García Garrido', 'Consulta de Cirugía General en Tijuana con el Dr. Edwin García Garrido. Conoce sus principales áreas de atención y solicita una valoración.'],
  ['/preguntas-frecuentes', 'Preguntas frecuentes | Dr. Edwin García Garrido', 'Respuestas sobre consulta, especialidad y principales áreas de atención del Dr. Edwin García Garrido, Cirujano General en Tijuana.'],
  ['/cirugia-de-vesicula', 'Cirugía de vesícula en Tijuana | Dr. Edwin García Garrido', 'Valoración de problemas de vesícula y cirugía de vesícula en Tijuana con el Dr. Edwin García Garrido. Consulta privada en Torre Médica Otay.'],
  ['/cirugia-de-hernia', 'Cirugía de hernia en Tijuana | Dr. Edwin García Garrido', 'Valoración y cirugía de hernia en Tijuana con el Dr. Edwin García Garrido, Cirujano General. Consulta privada en Torre Médica Otay.'],
  ['/cirugia-de-tiroides', 'Cirugía de tiroides en Tijuana | Dr. Edwin García Garrido', 'Valoración de enfermedades que pueden requerir cirugía de tiroides en Tijuana con el Dr. Edwin García Garrido.'],
  ['/lipomas', 'Lipomas en Tijuana | Dr. Edwin García Garrido', 'Valoración y tratamiento quirúrgico de lipomas en Tijuana con el Dr. Edwin García Garrido, Cirujano General.'],
  ['/trauma-y-urgencias', 'Trauma y urgencias quirúrgicas | Dr. Edwin García Garrido', 'Información sobre la experiencia profesional del Dr. Edwin García Garrido en trauma y urgencias quirúrgicas.'],
  ['/contacto', 'Contacto y citas | Dr. Edwin García Garrido', 'Consulta disponibilidad con el Dr. Edwin García Garrido. Consulta privada de Cirugía General en Torre Médica Otay, Tijuana.'],
  ['/aviso-de-privacidad', 'Aviso de privacidad | Dr. Edwin García Garrido', 'Aviso de privacidad del sitio profesional del Dr. Edwin García Garrido.'],
  ['/terminos-de-uso', 'Términos de uso | Dr. Edwin García Garrido', 'Términos de uso e información general del sitio profesional del Dr. Edwin García Garrido.'],
  ['/aviso-medico', 'Aviso médico | Dr. Edwin García Garrido', 'Alcance de la información médica publicada en el sitio del Dr. Edwin García Garrido.'],
]

const root = process.cwd()
const dist = join(root, 'dist')
const serverEntry = join(root, 'dist-ssr', 'entry-server.js')
const template = await readFile(join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(serverEntry).href)

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function withMetadata(html, title, description, robots = 'index, follow') {
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeAttribute(description)}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/?>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeAttribute(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeAttribute(description)}" />`)
}

for (const [route, title, description] of routes) {
  const appHtml = render(route)
  const html = withMetadata(template, title, description).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const output = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html')
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
}

const notFoundHtml = withMetadata(
  template.replace('<div id="root"></div>', `<div id="root">${render('/pagina-no-existente')}</div>`),
  'Página no encontrada | Dr. Edwin García Garrido',
  'La página solicitada no existe o cambió de ubicación.',
  'noindex, follow',
)
await writeFile(join(dist, '404.html'), notFoundHtml)
await rm(join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerender completado: ${routes.length} rutas + 404.html`)
