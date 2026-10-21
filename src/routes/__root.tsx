import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import serifItalicWoff2 from '@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2?url'
import serifWoff2 from '@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url'
import { site } from '#/content/site'
import appCss from '#/styles/app.css?url'

// O título do hero (LCP) usa Instrument Serif normal e itálico: preload evita o atraso do texto.
const fontPreload = (href: string) => ({
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  href,
  crossOrigin: 'anonymous' as const,
})

export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    links: [
      fontPreload(serifWoff2),
      fontPreload(serifItalicWoff2),
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
