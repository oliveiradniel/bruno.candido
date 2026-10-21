import { marquee, partners } from '#/content/site'

export function Marquee() {
  // Conteúdo duplicado para o loop contínuo; decorativo para leitores de tela.
  const items = [...marquee, ...marquee]
  return (
    <div className="overflow-hidden bg-accent py-4 text-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 font-serif text-[30px] whitespace-nowrap italic motion-reduce:animate-none">
        {items.map((item, i) => (
          <span key={i} className="contents">
            <span>{item}</span>
            <span>✱</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Partners() {
  return (
    <section className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-6 px-6 py-12">
      <p className="flex-none text-[13px] tracking-[0.18em] text-muted uppercase">Lado a lado com</p>
      <ul className="flex flex-wrap items-center gap-x-9 gap-y-3.5 text-[#E4DFD7]">
        {partners.map((partner) => (
          <li key={partner} className="font-serif text-2xl italic">
            {partner}
          </li>
        ))}
      </ul>
    </section>
  )
}
