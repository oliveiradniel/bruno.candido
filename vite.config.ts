import { defineConfig, loadEnv } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig(({ mode }) => {
  const siteUrl = loadEnv(mode, process.cwd(), 'VITE_').VITE_SITE_URL

  if (!siteUrl && mode === 'production') {
    console.warn('[seo] VITE_SITE_URL não definido: build sem sitemap.xml, canonical e URLs absolutas.')
  }

  return {
    resolve: { tsconfigPaths: true },
    plugins: [
      tailwindcss(),
      tanstackStart({
        // A página é 100% estática: gera HTML no build, mantendo o SSR disponível.
        prerender: { enabled: true, crawlLinks: true },
        pages: [
          {
            path: '/robots.txt',
            prerender: { enabled: true, outputPath: '/robots.txt' },
            sitemap: { exclude: true },
          },
        ],
        sitemap: { enabled: Boolean(siteUrl), host: siteUrl },
      }),
      // Adapter de deploy: na Vercel o Nitro detecta o ambiente e gera Functions + assets estáticos.
      nitro(),
      viteReact(),
    ],
  }
})
