import { faq, services, site } from '#/content/site'
import images from '#/content/images.json'

export const isTodo = (value: unknown) => typeof value === 'string' && value.startsWith('TODO')

// Placeholders do layout ("R$ [___]", "[Nome]") não podem ir para dados estruturados.
const hasPlaceholder = (value: string) => /\[[^\]]*\]/.test(value)

export const siteUrl = isTodo(site.url) ? '' : site.url.replace(/\/$/, '')

// Com o domínio ainda pendente, as URLs ficam relativas e o canonical é omitido.
export const absUrl = (path: string) => `${siteUrl}${path}`

export function imageUrl(name: keyof typeof images, format: 'jpg' | 'webp' | 'avif' = 'jpg') {
  const { widths } = images[name]
  return absUrl(`/img/${name}-${widths.at(-1)}.${format}`)
}

// Remove valores vazios e TODO para não publicar placeholder no JSON-LD.
function prune(value: unknown): unknown {
  if (Array.isArray(value)) {
    const items = value.map(prune).filter((v) => v !== undefined)
    return items.length ? items : undefined
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, prune(v)] as const)
      .filter(([, v]) => v !== undefined)
    return entries.length ? Object.fromEntries(entries) : undefined
  }
  if (value === '' || value === null || isTodo(value)) return undefined
  return value
}

export function buildJsonLd() {
  const id = (fragment: string) => `${absUrl('/')}#${fragment}`
  const { address } = site

  const faqEntities = faq
    .filter(({ q, a }) => !hasPlaceholder(q) && !hasPlaceholder(a))
    .map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }))

  const graph = [
    {
      '@type': 'Person',
      '@id': id('person'),
      name: site.person,
      jobTitle: site.jobTitle,
      image: imageUrl('bruno-candido-fotografo'),
      url: absUrl('/'),
      sameAs: site.sameAs,
      knowsAbout: site.knowsAbout,
      worksFor: { '@id': id('business') },
      homeLocation: { '@type': 'City', name: `${address.city}, ${address.region}` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': id('business'),
      name: site.name,
      description: site.description,
      url: absUrl('/'),
      founder: { '@id': id('person') },
      logo: imageUrl(site.logo),
      image: [absUrl(site.ogImage), imageUrl('noiva-buque-veu')],
      telephone: site.telephone,
      email: site.email,
      priceRange: site.priceRange,
      openingHours: site.openingHours,
      sameAs: site.sameAs,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.region,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
      areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
      knowsLanguage: site.language,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ensaios e casamentos',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, description: service.text },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': id('website'),
      url: absUrl('/'),
      name: site.name,
      inLanguage: site.language,
      publisher: { '@id': id('business') },
    },
    {
      '@type': 'WebPage',
      '@id': id('webpage'),
      url: absUrl('/'),
      name: site.title,
      description: site.description,
      inLanguage: site.language,
      isPartOf: { '@id': id('website') },
      about: { '@id': id('business') },
      primaryImageOfPage: { '@type': 'ImageObject', url: absUrl(site.ogImage) },
    },
    ...(faqEntities.length
      ? [{ '@type': 'FAQPage', '@id': id('faq'), isPartOf: { '@id': id('webpage') }, mainEntity: faqEntities }]
      : []),
  ]

  return { '@context': 'https://schema.org', '@graph': graph.map(prune) }
}

export function seoMeta() {
  const ogImage = absUrl(site.ogImage)
  return [
    { title: site.title },
    { name: 'description', content: site.description },
    { name: 'theme-color', content: site.themeColor },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: site.locale },
    { property: 'og:site_name', content: site.name },
    { property: 'og:title', content: site.title },
    { property: 'og:description', content: site.description },
    ...(siteUrl ? [{ property: 'og:url', content: absUrl('/') }] : []),
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: site.ogImageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: site.title },
    { name: 'twitter:description', content: site.description },
    { name: 'twitter:image', content: ogImage },
  ]
}
