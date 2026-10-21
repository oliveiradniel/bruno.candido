import { testimonials } from '#/content/site'

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="mx-auto max-w-310 px-6 py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 id="depoimentos-titulo" className="font-serif text-section leading-none">
          Quem fotografou, <span className="italic">conta</span>
        </h2>
        <p className="max-w-90 text-sm text-muted">Depoimentos a coletar dos clientes recentes, com autorização.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {testimonials.map((item) => (
          <figure
            key={item.quote}
            className="flex flex-col gap-5.5 rounded-[22px] border border-cream/10 bg-surface p-7.5"
          >
            <span className="font-serif text-[64px] leading-[0.6] text-accent" aria-hidden="true">
              “
            </span>
            <blockquote className="font-serif text-2xl leading-[1.35] italic">{item.quote}</blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span className="size-11 rounded-full bg-[#2E2C30]" aria-hidden="true" />
              <span className="text-sm">
                <strong>{item.name}</strong>
                <br />
                <span className="text-muted">{item.service}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-2.5 text-sm text-muted">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.8 5.8 21l1.4-7L2 9.3l7-.8z" />
        </svg>
        [Nota e nº de avaliações no Google, após criar o Perfil da Empresa]
      </p>
    </section>
  )
}
