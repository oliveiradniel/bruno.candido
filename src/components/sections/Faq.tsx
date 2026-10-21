import { cities, faq } from '#/content/site'

export function Cities() {
  return (
    <section aria-labelledby="cidades-titulo" className="bg-cream text-paper-ink">
      <div className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-8 px-6 py-20">
        <h2 id="cidades-titulo" className="flex-[1_1_360px] font-serif text-section-sm leading-[1.02]">
          Onde eu <span className="italic">fotografo</span>
        </h2>
        <div className="flex flex-[1_1_520px] flex-col gap-2.5">
          <ul className="flex flex-wrap gap-2.5">
            {cities.map((city, i) => (
              <li
                key={city}
                className={`rounded-full px-5 py-3 text-[15px] font-semibold ${i === 0 ? 'bg-paper-ink text-cream' : 'border border-paper-ink'}`}
              >
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-paper-muted">Outras cidades sob consulta · [regra de deslocamento]</p>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="mx-auto max-w-225 px-6 py-28">
      <h2 id="duvidas-titulo" className="mb-10 text-center font-serif text-section leading-none">
        Perguntas <span className="text-accent italic">frequentes</span>
      </h2>
      <div className="flex flex-col border-t border-cream/14">
        {faq.map((item) => (
          <details key={item.q} className="group border-b border-cream/14">
            <summary className="group/summary flex cursor-pointer items-center justify-between gap-4 py-6 text-lg font-semibold transition-[color,padding] duration-350 hover:text-accent">
              {item.q}
              <span
                aria-hidden="true"
                className="inline-flex size-10 flex-[0_0_40px] items-center justify-center rounded-full border border-cream/20 text-[28px] leading-none text-accent transition-[transform,background-color,color,border-color] duration-400 ease-soft group-open:rotate-135 group-open:border-accent group-open:bg-accent group-open:text-ink group-hover/summary:border-accent"
              >
                +
              </span>
            </summary>
            <p className="mb-6 leading-[1.7] text-muted group-open:animate-faq-in">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
