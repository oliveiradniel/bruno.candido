import { Img } from '#/components/Img'
import { PillButton } from '#/components/PillButton'
import { messages, nav, whatsapp } from '#/content/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/55 backdrop-blur-[18px] backdrop-saturate-[1.6]">
      <div className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-6 px-6 py-3.5">
        <a href="#topo" className="flex items-center gap-3">
          {/* O nome ao lado já identifica o link; a imagem é decorativa aqui. */}
          <Img name="bruno-candido-logo" alt="" sizes="48px" eager className="block size-12 rounded-full" />
          <span className="flex flex-col leading-[1.1]">
            <span className="text-sm font-bold tracking-[0.14em]">BRUNO CANDIDO</span>
            <span className="text-[11px] tracking-[0.32em] text-accent">FOTOGRAFIA</span>
          </span>
        </a>
        <nav aria-label="Principal" className="flex gap-7 text-sm text-body max-[760px]:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-350 after:ease-soft hover:text-cream hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <PillButton href={whatsapp(messages.general)} className="min-h-11 gap-2 px-5 text-sm">
          Falar com o Bruno
        </PillButton>
      </div>
    </header>
  )
}
