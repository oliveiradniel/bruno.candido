import images from '#/content/images.json'

export type ImageName = keyof typeof images

type ImgProps = {
  name: ImageName
  alt: string
  // Largura em que a imagem realmente é desenhada. Com object-fit: cover,
  // é a largura da foto escalada, não a da caixa (ver srcsetFor).
  sizes: string
  className?: string
  position?: string
  // priority: imagem LCP (eager + fetchpriority high). eager: acima da dobra, sem prioridade.
  priority?: boolean
  eager?: boolean
}

export function srcsetFor(name: ImageName, format: 'avif' | 'webp' | 'jpg') {
  return images[name].widths.map((w) => `/img/${name}-${w}.${format} ${w}w`).join(', ')
}

export function Img({ name, alt, sizes, className, position, priority, eager }: ImgProps) {
  const { width, height, widths } = images[name]
  return (
    <picture>
      <source type="image/avif" srcSet={srcsetFor(name, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcsetFor(name, 'webp')} sizes={sizes} />
      <img
        src={`/img/${name}-${widths.at(-1)}.jpg`}
        srcSet={srcsetFor(name, 'jpg')}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority || eager ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        className={className}
        style={position ? { objectPosition: position } : undefined}
      />
    </picture>
  )
}
