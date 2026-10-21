import { PillButton } from '#/components/PillButton'
import { messages, sessionPackages, weddingPackages, whatsapp } from '#/content/site'
import type { Package } from '#/content/site'

function PackageCard({ pkg, size }: { pkg: Package; size: 'session' | 'wedding' }) {
  const featured = Boolean(pkg.badge)
  const wedding = size === 'wedding'
  const muted = featured ? 'text-paper-muted' : 'text-muted'

  return (
    <article
      className={`relative flex flex-col ${wedding ? 'gap-5 rounded-[26px] px-7.5 py-8.5' : 'gap-4 rounded-[22px] px-6.5 py-7'} ${featured ? 'bg-cream text-paper-ink' : 'border border-cream/14'}`}
    >
      {pkg.badge && (
        <span className="absolute top-4.5 right-4.5 rounded-full bg-paper-ink px-3 py-1.75 text-[11px] font-bold tracking-[0.16em] text-cream">
          {pkg.badge}
        </span>
      )}
      <div>
        <h4 className={`font-serif ${wedding ? 'text-[34px]' : 'text-[30px]'}`}>{pkg.title}</h4>
        <p className={`${wedding ? 'mt-1.5' : 'mt-1'} text-sm ${muted}`}>{pkg.subtitle}</p>
      </div>
      <div>
        <span className={`text-sm ${muted}`}>a partir de</span>
        <p className={`font-serif leading-none ${wedding ? 'text-[52px]' : 'text-[44px]'}`}>{pkg.price}</p>
        {pkg.terms && <span className={`text-[13px] ${muted}`}>{pkg.terms}</span>}
      </div>
      <ul className={`flex flex-col text-[15px] ${wedding ? 'gap-2.5' : 'gap-2.25'} ${featured ? 'text-[#3A3732]' : 'text-body'}`}>
        {pkg.items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-2.5 before:size-1.5 before:flex-none before:-translate-y-0.5 before:rounded-full before:bg-accent before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
      <PillButton
        href={whatsapp(pkg.message)}
        variant={featured ? 'paper' : 'outline'}
        className={`mt-auto justify-center text-sm ${wedding ? 'min-h-12.5' : 'min-h-12'}`}
      >
        {pkg.cta}
        <span className="sr-only"> ({pkg.title})</span>
      </PillButton>
    </article>
  )
}

export function Packages() {
  return (
    <section id="pacotes" aria-labelledby="pacotes-titulo" className="mx-auto max-w-310 px-6 py-28">
      <div className="mb-14 flex flex-col items-center gap-4 text-center">
        <p className="text-xs tracking-[0.24em] text-accent uppercase">Ensaios e casamentos</p>
        <h2 id="pacotes-titulo" className="font-serif text-section-lg leading-none">
          Investimento <span className="italic">transparente</span>
        </h2>
        <p className="max-w-140 leading-[1.6] text-muted">
          Você já chega no WhatsApp sabendo o que inclui. Ajusto cada pacote ao seu momento na nossa conversa.
        </p>
      </div>
      <h3 className="mb-5 text-[13px] font-semibold tracking-[0.22em] text-muted uppercase">Ensaios no estúdio</h3>
      <div className="mb-16 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {sessionPackages.map((pkg) => (
          <PackageCard key={pkg.title} pkg={pkg} size="session" />
        ))}
      </div>
      <h3 className="mb-5 text-[13px] font-semibold tracking-[0.22em] text-muted uppercase">Casamentos</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] items-stretch gap-5">
        {weddingPackages.map((pkg) => (
          <PackageCard key={pkg.title} pkg={pkg} size="wedding" />
        ))}
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-[18px] border border-dashed border-accent px-6.5 py-5.5">
        <p className="leading-normal">
          <strong className="text-accent">Agenda aberta.</strong> Ensaios agendados até [data] ganham [bônus], e casais
          que reservarem 2027 ganham [bônus: ex. pré-wedding].
        </p>
        <PillButton href={whatsapp(messages.openAgenda)} className="min-h-11.5 px-5.5 text-sm">
          Garantir meu horário
        </PillButton>
      </div>
    </section>
  )
}
