import { steps } from '#/content/site'

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="border-y border-cream/8 bg-surface">
      <div className="mx-auto max-w-310 px-6 py-26">
        <h2 id="processo-titulo" className="mb-12 font-serif text-section leading-none">
          Como funciona, <span className="text-accent italic">passo a passo</span>
        </h2>
        <ol className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t border-cream/14">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-2.5 border-b border-cream/14 py-7 pr-6">
              <span className="font-serif text-[44px] text-accent italic" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <strong className="text-[17px]">{step.title}</strong>
              <span className="text-[15px] leading-[1.6] text-muted">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
