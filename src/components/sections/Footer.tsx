import { Img } from '#/components/Img'
import { NewTabHint, PillButton, WhatsAppIcon, externalProps } from '#/components/PillButton'
import { messages, site, whatsapp } from '#/content/site'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="px-6 pb-24">
      <div className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-8 rounded-4xl bg-accent px-[clamp(24px,6vw,80px)] py-[clamp(48px,7vw,96px)] text-ink">
        <div className="min-w-0 flex-[1_1_480px]">
          <h2 id="cta-titulo" className="font-serif text-[clamp(44px,5.6vw,84px)] leading-[0.98]">
            Qual momento <span className="italic">vamos eternizar?</span>
          </h2>
          <p className="mt-4.5 max-w-130 text-lg leading-[1.6]">
            Gestante, família, retrato, 15 anos ou casamento: me mande uma mensagem contando o que você imagina que eu
            respondo pessoalmente.
          </p>
        </div>
        <PillButton href={whatsapp(messages.finalCta)} variant="dark" className="min-h-15 gap-3 px-8 text-base">
          <WhatsAppIcon size={20} />
          Chamar no WhatsApp
        </PillButton>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-cream/10">
      <div className="mx-auto flex max-w-310 flex-wrap items-start justify-between gap-8 px-6 pt-12 pb-8">
        <div className="flex items-center gap-3.5">
          <Img name="bruno-candido-logo" alt="" sizes="64px" className="block size-16 rounded-full" />
          <p className="text-sm leading-[1.6] text-muted">
            {site.name}
            <br />
            Ensaios, gestantes &amp; casamentos
          </p>
        </div>
        <address className="text-sm leading-[1.8] text-muted not-italic">
          {site.address.street}
          <br />
          {site.address.city}, {site.address.region}
        </address>
        <div className="flex flex-col text-sm leading-[1.8]">
          <a href={whatsapp(messages.general)} {...externalProps(whatsapp(messages.general))}>
            WhatsApp {site.telephoneLabel}
            <NewTabHint />
          </a>
          <a href={site.instagram} target="_blank" rel="me noopener noreferrer">
            Instagram {site.instagramHandle}
            <NewTabHint />
          </a>
        </div>
      </div>
      <p
        className="overflow-hidden px-3 pb-2 text-center font-serif text-[clamp(56px,13vw,190px)] leading-[0.85] whitespace-nowrap text-[#1C1B1E] italic"
        aria-hidden="true"
      >
        {site.person}
      </p>
      <p className="px-6 pb-7 text-center text-xs text-[#8A867F]">© 2026 {site.name}</p>
    </footer>
  )
}
