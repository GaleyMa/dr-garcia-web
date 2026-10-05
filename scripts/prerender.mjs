import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { PRERENDER_ROUTES, getSeoForPath } from '../src/data/seo.js'

const root = process.cwd()
const dist = join(root, 'dist')
const serverEntry = join(root, 'dist-ssr', 'entry-server.js')
const template = await readFile(join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(serverEntry).href)

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function withMetadata(html, metadata) {
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${metadata.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeAttribute(metadata.description)}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/?>/i, `<meta name="robots" content="${metadata.robots}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeAttribute(metadata.description)}" />`)
    .replace(/<meta property="og:type" content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${metadata.type}" />`)
}

for (const route of PRERENDER_ROUTES) {
  const metadata = getSeoForPath(route)
  const appHtml = render(route)
  const html = withMetadata(template, metadata).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const output = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html')
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
}

const notFoundRoute = '/pagina-no-existente'
const notFoundHtml = withMetadata(
  template.replace('<div id="root"></div>', `<div id="root">${render(notFoundRoute)}</div>`),
  getSeoForPath(notFoundRoute),
)
await writeFile(join(dist, '404.html'), notFoundHtml)
await rm(join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerender completado: ${PRERENDER_ROUTES.length} rutas + 404.html`)
