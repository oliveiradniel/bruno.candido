import { Img } from '#/components/Img'
import { NewTabHint } from '#/components/PillButton'
import { gallery, site } from '#/content/site'
import images from '#/content/images.json'

// Células de 2 linhas (452px no desktop, 412px abaixo de 900px) com fotos 3:4 em cover:
// a foto é desenhada com a largura da célula ou 0.75 × altura, o que for maior.
const cellSizes = '(max-width: 660px) 310px, (max-width: 900px) calc(50vw - 30px), 339px'
const wideSizes = '(max-width: 900px) calc(100vw - 48px), (max-width: 1240px) calc(50vw - 30px), 590px'

export function Portfolio() {
  return (
    <section aria-labelledby="portfolio-titulo" className="px-6 pb-28">
      <div className="mx-auto max-w-310">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="portfolio-titulo" className="font-serif text-section-sm leading-none">
            Momentos que <span className="italic">não se repetem</span>
          </h2>
          <a
            href={site.instagram}
            target="_blank"
            rel="me noopener noreferrer"
            className="border-b border-current pb-0.5 text-sm font-semibold"
          >
            Ver mais no Instagram <span aria-hidden="true">→</span>
            <NewTabHint />
          </a>
        </div>
        <div className="grid auto-rows-55 grid-cols-4 gap-3 max-[900px]:auto-rows-50 max-[900px]:grid-cols-2">
          {gallery.map((item) => (
            <figure
              key={item.image}
              className={`group relative row-span-2 overflow-hidden rounded-2xl bg-[#1F1E22] ${item.wide ? 'col-span-2' : ''}`}
            >
              <Img
                name={item.image as keyof typeof images}
                alt={item.alt}
                sizes={item.wide ? wideSizes : cellSizes}
                position={item.position}
                className="block size-full object-cover transition-[transform,filter] duration-800 ease-soft group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-cream backdrop-blur-sm">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
