import { createFileRoute } from '@tanstack/react-router'
import { srcsetFor } from '#/components/Img'
import { About } from '#/components/sections/About'
import { Cities, Faq } from '#/components/sections/Faq'
import { FinalCta, Footer } from '#/components/sections/Footer'
import { Header } from '#/components/sections/Header'
import { Hero, heroImageSizes } from '#/components/sections/Hero'
import { Marquee, Partners } from '#/components/sections/Marquee'
import { Packages } from '#/components/sections/Packages'
import { Portfolio } from '#/components/sections/Portfolio'
import { Process } from '#/components/sections/Process'
import { Services } from '#/components/sections/Services'
import { Studio } from '#/components/sections/Studio'
import { Testimonials } from '#/components/sections/Testimonials'
import { absUrl, buildJsonLd, seoMeta, siteUrl } from '#/lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seoMeta(),
    links: [
      ...(siteUrl ? [{ rel: 'canonical', href: absUrl('/') }] : []),
      // Preload da foto LCP do hero, no mesmo formato e sizes do <picture>.
      {
        rel: 'preload',
        as: 'image',
        type: 'image/avif',
        imageSrcSet: srcsetFor('noiva-buque-veu', 'avif'),
        imageSizes: heroImageSizes,
        fetchPriority: 'high',
      },
    ],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(buildJsonLd()) }],
  }),
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <a
        href="#conteudo"
        className="sr-only z-100 rounded-full bg-accent px-5 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Partners />
        <About />
        <Services />
        <Portfolio />
        <Studio />
        <Packages />
        <Process />
        <Testimonials />
        <Cities />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
