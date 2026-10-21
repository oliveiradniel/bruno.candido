import { aboutHighlights } from '#/content/site'

export function About() {
  return (
    <section aria-labelledby="sobre-titulo" className="bg-cream text-paper-ink">
      <div className="mx-auto flex max-w-310 flex-wrap items-center gap-14 px-6 py-26">
        {/* TODO: trocar pelo retrato do Bruno (<Img>) quando a foto chegar. */}
        <div
          className="flex aspect-4/5 min-w-0 flex-[1_1_380px] items-end justify-center overflow-hidden rounded-[18px] bg-[#DCD5CA]"
          role="img"
          aria-label="Espaço para a foto do Bruno"
        >
          <svg viewBox="0 0 200 220" className="block h-auto w-[72%]" fill="#B9AF9F" aria-hidden="true">
            <circle cx="100" cy="72" r="44" />
            <path d="M14 220c0-52 38-92 86-92s86 40 86 92z" />
          </svg>
        </div>
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
          <p className="text-xs tracking-[0.24em] text-rust uppercase">Prazer, Bruno Candido</p>
          <h2 id="sobre-titulo" className="font-serif text-section leading-[1.02]">
            Não é só o clique. <span className="italic">É estar no lugar certo</span> quando a emoção acontece.
          </h2>
          <p className="text-[17px] leading-[1.7] text-paper-body">
            Sou fotógrafo em Brodowski, com estúdio próprio na Rua Castelo Branco, 321. Fotografo casamentos do jeito
            que eles são: a mãe ajeitando o véu, o olhar do noivo na entrada, a avó chorando na terceira fileira, o
            primeiro brinde da festa.
          </p>
          <p className="text-[17px] leading-[1.7] text-paper-body">
            Meu estilo é limpo e natural, sem filtro pesado, sem pose forçada. Você recebe fotos que continuam bonitas
            daqui a 20 anos. [Inserir: há quanto tempo fotografa, formação e se trabalha com equipe.]
          </p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 pt-2">
            {aboutHighlights.map((item) => (
              <li key={item.title} className="border-t border-paper-ink pt-3.5">
                <strong className="text-[15px] font-bold">{item.title}</strong>
                <p className="mt-1 text-sm leading-normal text-paper-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
