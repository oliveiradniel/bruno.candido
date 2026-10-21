import { Img } from '#/components/Img'
import { PillButton, WhatsAppIcon } from '#/components/PillButton'
import { services, whatsapp } from '#/content/site'
import images from '#/content/images.json'

// Card de 320×400 com object-fit: cover. Foto retrato preenche pela largura (320px);
// foto paisagem preenche pela altura e é desenhada com 400 × proporção de largura.
function cardSizes(name: keyof typeof images) {
  const { width, height } = images[name]
  return `${Math.round(Math.max(320, (400 * width) / height))}px`
}

function ServiceCard({ service, hidden }: { service: (typeof services)[number]; hidden?: boolean }) {
  return (
    <article
      aria-hidden={hidden || undefined}
      className="flex w-80 flex-[0_0_320px] flex-col overflow-hidden rounded-[22px] border border-cream/10 bg-surface"
    >
      <div className={`aspect-4/5 overflow-hidden ${service.bg}`}>
        <Img
          name={service.image as keyof typeof images}
          alt={hidden ? '' : service.alt}
          sizes={cardSizes(service.image as keyof typeof images)}
          position={service.position}
          className="block size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5.5 pt-5 pb-5.5">
        <p className="text-xs tracking-[0.2em] text-accent">{service.tag}</p>
        <h3 className="font-serif text-[28px] leading-[1.05]">{service.title}</h3>
        <p className="text-sm leading-normal text-body">{service.text}</p>
        <PillButton
          href={whatsapp(service.message)}
          tabIndex={hidden ? -1 : undefined}
          className="mt-auto min-h-12 justify-center gap-2 px-4.5 text-sm"
        >
          <WhatsAppIcon size={16} />
          {service.cta}
        </PillButton>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="mx-auto max-w-310 px-6 pt-28 pb-22">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 id="servicos-titulo" className="max-w-170 font-serif text-section-lg leading-none">
          O que eu fotografo <span className="text-accent italic">para você</span>
        </h2>
        <p className="max-w-95 leading-[1.6] text-muted">
          Do primeiro ultrassom à festa de 15 anos. Escolha o seu momento e me chame no WhatsApp.
        </p>
      </div>
      {/* Carrossel contínuo: pausa no hover/foco/toque; com movimento reduzido vira rolagem manual. */}
      <div className="group overflow-hidden pt-1.5 pb-2.5 motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-services gap-5 group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
          {services.map((service) => (
            <ServiceCard key={`${service.title}-copia`} service={service} hidden />
          ))}
        </div>
      </div>
    </section>
  )
}
