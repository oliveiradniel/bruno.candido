import { createFileRoute } from '@tanstack/react-router'
import { absUrl, siteUrl } from '#/lib/seo'

export const Route = createFileRoute('/robots.txt')({
  server: {
    handlers: {
      GET: () => {
        // A linha Sitemap exige URL absoluta: só sai quando o domínio estiver definido.
        const lines = ['User-agent: *', 'Allow: /', ...(siteUrl ? ['', `Sitemap: ${absUrl('/sitemap.xml')}`] : [])]
        return new Response(lines.join('\n') + '\n', {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        })
      },
    },
  },
})
