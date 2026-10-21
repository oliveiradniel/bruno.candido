// Gera variantes AVIF/WebP/JPG de cada foto em assets-src/ para public/img/
// e escreve o manifest src/content/images.json usado pelo componente <Img>.
// Variantes já existentes são reaproveitadas; use --force para regerar tudo.
import { existsSync } from 'node:fs'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const srcDir = path.join(root, 'assets-src')
const outDir = path.join(root, 'public/img')
const manifestPath = path.join(root, 'src/content/images.json')
const force = process.argv.includes('--force')

// Larguras-alvo; cada imagem usa só as menores que o original (nunca upscale)
// e acrescenta a largura original como maior variante.
const TARGET_WIDTHS = [320, 480, 640, 960, 1280]
// O logo aparece com 48px e 64px: 1x e 2x bastam.
const OVERRIDES = { 'bruno-candido-logo': [96, 150] }

const FORMATS = {
  avif: (img) => img.avif({ quality: 55, effort: 6 }),
  webp: (img) => img.webp({ quality: 78, effort: 5 }),
  jpg: (img) => img.jpeg({ quality: 80, mozjpeg: true, progressive: true }),
}

function widthsFor(name, intrinsic) {
  if (OVERRIDES[name]) return OVERRIDES[name].filter((w) => w <= intrinsic)
  const widths = TARGET_WIDTHS.filter((w) => w < intrinsic * 0.9)
  return [...widths, Math.min(intrinsic, TARGET_WIDTHS.at(-1))]
}

async function render(input, width, format, file) {
  if (!force && existsSync(file)) return
  // sharp remove metadados por padrão; keepIccProfile preserva o perfil de cor.
  await FORMATS[format](sharp(input).rotate().resize({ width }).keepIccProfile()).toFile(file)
}

await mkdir(outDir, { recursive: true })
const manifest = {}
const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort()

for (const file of files) {
  const name = path.parse(file).name
  const input = path.join(srcDir, file)
  const { width, height } = await sharp(input).rotate().metadata()
  const widths = widthsFor(name, width)

  for (const w of widths) {
    for (const format of Object.keys(FORMATS)) {
      await render(input, w, format, path.join(outDir, `${name}-${w}.${format}`))
    }
  }
  manifest[name] = { width, height, widths }
}

// Imagem de compartilhamento (Open Graph) 1200x630.
if (force || !existsSync(path.join(root, 'public/og-image.jpg'))) {
  await sharp(path.join(srcDir, 'familia-festa-aniversario.jpg'))
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(root, 'public/og-image.jpg'))
}

// Ícones a partir do logo (o original tem só 150px; trocar por um logo maior quando houver).
const logo = path.join(srcDir, 'bruno-candido-logo.jpg')
for (const [size, out] of [
  [32, 'favicon-32x32.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'icon-192.png'],
]) {
  const file = path.join(root, 'public', out)
  if (force || !existsSync(file)) await sharp(logo).resize(size, size).png().toFile(file)
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
console.log(`optimize-images: ${files.length} imagens → public/img`)
