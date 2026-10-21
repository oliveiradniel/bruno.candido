import { Img } from '#/components/Img'
import { PillButton, WhatsAppIcon } from '#/components/PillButton'
import { heroStats, messages, whatsapp } from '#/content/site'

// A foto grande ocupa a altura toda da coluna (até 640px) com object-fit: cover,
// então é desenhada com ~0.75 × 640 = 480px de largura em qualquer viewport.
export const heroImageSizes = '480px'
const heroCellSizes = '(min-width: 1240px) 270px, (min-width: 976px) 23vw, 48vw'

export function Hero() {
  return (
    <section
      id="topo"
      className="mx-auto box-border flex min-h-[calc(100vh-77px)] max-w-310 flex-wrap items-center gap-12 px-6 py-8"
    >
      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-5">
        <p className="inline-flex items-center gap-2.5 text-xs tracking-[0.24em] text-muted uppercase">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          Brodowski · Batatais · Ribeirão Preto e região
        </p>
        <h1 className="font-serif text-[clamp(42px,min(5vw,8.5vh),76px)] leading-[0.98] tracking-[-0.01em]">
          Cada fase da sua vida <span className="text-accent italic">merece virar memória.</span>
        </h1>
        <p className="max-w-130 text-[17px] leading-[1.55] text-body">
          Ensaios de gestante, família e retrato no meu estúdio em Brodowski, e casamentos em toda a região. Cor
          natural, pele fiel e direção leve, para você se reconhecer em cada foto e reviver o momento como ele foi.
        </p>
        <div className="flex flex-wrap gap-3">
          <PillButton href={whatsapp(messages.heroBooking)} className="min-h-13 gap-2.5 px-7 text-[15px]">
            <WhatsAppIcon />
            Agendar meu ensaio
          </PillButton>
          <PillButton href="#servicos" variant="outline" className="min-h-13 px-7 text-[15px] font-semibold">
            Ver o que eu fotografo
          </PillButton>
        </div>
        <dl className="flex flex-wrap gap-7 border-t border-cream/12">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse pt-3.5">
              <dt className="text-[13px] text-muted">{stat.label}</dt>
              <dd className="font-serif text-[30px] leading-[1.1]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid h-[clamp(360px,calc(100vh-160px),640px)] min-w-0 flex-[1_1_420px] grid-cols-2 grid-rows-2 gap-3.5">
        <div className="row-span-2 overflow-hidden rounded-[220px_220px_18px_18px] border border-cream/10 bg-[#26252A]">
          <Img
            name="noiva-buque-veu"
            alt="Noiva sorrindo com buquê de flores brancas, véu e luz de janela"
            sizes={heroImageSizes}
            position="55% 30%"
            priority
            className="block size-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-[18px] border border-cream/10 bg-[#2E2C30]">
          <Img
            name="noivos-altar-igreja"
            alt="Noivos de mãos dadas no altar da igreja, sorrindo um para o outro"
            sizes={heroCellSizes}
            position="50% 48%"
            eager
            className="block size-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-[18px] border border-cream/10 bg-[#1F1E22]">
          <Img
            name="gestante-estudio-preto-e-branco"
            alt="Ensaio de gestante em estúdio, preto e branco: casal abraçado com as mãos na barriga"
            sizes={heroCellSizes}
            position="50% 40%"
            eager
            className="block size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
