import { Img } from '#/components/Img'
import { PillButton } from '#/components/PillButton'
import { messages, site, studioItems, whatsapp } from '#/content/site'

// Fotos 4:5 em caixas 3:4: preenchem pela altura (~343px × 0.8 ≈ 275px no desktop).
const photoSizes = '(min-width: 1240px) 275px, (min-width: 990px) 23vw, calc(50vw - 31px)'

export function Studio() {
  return (
    <section id="estudio" aria-labelledby="estudio-titulo" className="bg-sand text-paper-ink">
      <div className="mx-auto flex max-w-310 flex-wrap-reverse items-center gap-14 px-6 py-26">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-5.5">
          <p className="text-xs tracking-[0.24em] text-rust uppercase">Estúdio próprio · Brodowski</p>
          <h2 id="estudio-titulo" className="font-serif text-section leading-[1.02]">
            Um espaço pensado para você <span className="italic">se sentir à vontade</span> na frente da câmera.
          </h2>
          <p className="text-[17px] leading-[1.7] text-paper-body">
            Fundo infinito, iluminação de estúdio e direção do começo ao fim. Você não precisa saber posar: eu te guio.
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
            {studioItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[15px] font-semibold">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rust"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4.5 rounded-[18px] bg-paper-ink px-6.5 py-6 text-cream">
            <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-1">
              <span className="text-xs tracking-[0.2em] text-accent">OFERTA DE TEMPORADA</span>
              <span className="font-serif text-[26px] leading-[1.15]">
                Ensaio no estúdio com [condição: ex. +5 fotos tratadas] até [data]
              </span>
            </div>
            <PillButton href={whatsapp(messages.studioOffer)} className="min-h-12 px-5.5 text-sm">
              Reservar horário
            </PillButton>
          </div>
          <address className="text-sm text-paper-muted not-italic">
            {site.address.street} · {site.address.city}, {site.address.region}
          </address>
        </div>
        <div className="grid min-w-0 flex-[1_1_400px] grid-cols-2 gap-3.5">
          <div className="aspect-3/4 overflow-hidden rounded-[18px] bg-[#CFC7BA]">
            <Img
              name="pai-filha-girassois-estudio"
              alt="Pai agachado abraçando a filha pequena em cenário florido com girassóis"
              sizes={photoSizes}
              position="50% 45%"
              className="block size-full object-cover"
            />
          </div>
          <div className="mt-12 aspect-3/4 overflow-hidden rounded-[18px] bg-[#BFB6A8]">
            <Img
              name="mae-bebe-fantasia-estudio"
              alt="Mãe sorrindo com a bebê fantasiada no colo"
              sizes={photoSizes}
              position="50% 35%"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
