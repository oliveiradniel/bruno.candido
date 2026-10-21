// Fonte única do conteúdo da página e dos dados de SEO/schema.org.
// Valores que começam com "TODO:" são omitidos do JSON-LD (ver lib/seo.ts)
// e precisam ser preenchidos antes do deploy.

const whatsappNumber = '5516991611448'

export const whatsapp = (text?: string) =>
  `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const site = {
  // Definido por VITE_SITE_URL no .env (sem barra no final).
  url: import.meta.env.VITE_SITE_URL || 'TODO: https://dominio-final.com.br',
  name: 'Bruno Candido Fotografia',
  person: 'Bruno Candido',
  jobTitle: 'Fotógrafo',
  title: 'Bruno Candido Fotografia | Fotógrafo em Brodowski e Ribeirão Preto',
  description:
    'Ensaios de gestante, família e retrato em estúdio próprio em Brodowski, e casamentos em Batatais, Ribeirão Preto e região. Agende pelo WhatsApp.',
  locale: 'pt_BR',
  language: 'pt-BR',
  themeColor: '#0D0D0E',
  telephone: '+5516991611448',
  telephoneLabel: '(16) 99161-1448',
  email: 'TODO: e-mail de contato',
  instagram: 'https://www.instagram.com/brunocandidofoto/',
  instagramHandle: '@brunocandidofoto',
  sameAs: ['https://www.instagram.com/brunocandidofoto/'],
  address: {
    street: 'Rua Castelo Branco, 321',
    city: 'Brodowski',
    region: 'SP',
    postalCode: 'TODO: CEP',
    country: 'BR',
  },
  areaServed: ['Brodowski', 'Batatais', 'Ribeirão Preto'],
  priceRange: 'TODO: faixa de preço, ex. $$',
  openingHours: 'TODO: horário de atendimento',
  knowsAbout: [
    'Ensaio gestante',
    'Ensaio de família',
    'Retrato profissional',
    'Fotografia de debutante',
    'Fotografia de casamento',
    'Pré-wedding',
    'Formatura',
  ],
  logo: 'bruno-candido-logo',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'Família abraçada sorrindo em festa de aniversário, foto de Bruno Candido',
} as const

// Mensagens pré-preenchidas dos CTAs de WhatsApp fora dos cards de serviço e pacotes.
export const messages = {
  general: 'Olá Bruno! Vim pelo site e gostaria de mais informações.',
  heroBooking: 'Olá Bruno! Quero agendar um ensaio.',
  studioOffer: 'Olá Bruno! Quero reservar um horário no estúdio com a oferta de temporada.',
  openAgenda: 'Olá Bruno! Quero garantir meu horário com o bônus da agenda aberta.',
  finalCta: 'Olá Bruno! Vim pelo site e quero contar o momento que quero eternizar.',
}

export const nav = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#estudio', label: 'Estúdio' },
  { href: '#pacotes', label: 'Investimento' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export const heroStats = [
  { value: '8,7 mil', label: 'pessoas acompanham no Instagram' },
  { value: '600+', label: 'trabalhos publicados' },
  { value: 'Estúdio', label: 'próprio em Brodowski' },
]

export const marquee = [
  'Gestante',
  'Família',
  '15 anos',
  'Ensaios em estúdio',
  'Casamentos',
  'Retrato profissional',
  'Pré-wedding',
  'Formatura',
]

export const partners = [
  'Villa da Mata',
  'Lis Fazzio Cerimonial',
  'RD Beauty Concept',
  'Espaço Evelin Mininel',
  'Studio Jaine Maria',
]

export const aboutHighlights = [
  { title: 'Cor natural', text: 'Pele fiel e tons limpos, sem modismo.' },
  { title: 'Direção leve', text: 'Você não precisa saber posar.' },
  { title: 'Estúdio próprio', text: 'Fundo infinito e luz controlada.' },
]

export const services = [
  {
    tag: '01 · NO ESTÚDIO',
    title: 'Gestante',
    text: 'A barriga, o casal, a espera. Luz de estúdio, fundo infinito e um clima íntimo, do jeito que essa fase merece.',
    cta: 'Agendar ensaio gestante',
    message: 'Olá Bruno! Quero agendar um ensaio gestante.',
    image: 'gestante-sapatinhos-estudio',
    alt: 'Gestante sorrindo no estúdio, segurando sapatinhos vermelhos de bebê',
    position: '50% 28%',
    bg: 'bg-[#1F1E22]',
  },
  {
    tag: '02 · ESTÚDIO E EVENTOS',
    title: 'Família',
    text: 'Pais, filhos, avós e até o pet. Um ensaio leve, sem pose dura, para virar quadro na parede.',
    cta: 'Agendar ensaio de família',
    message: 'Olá Bruno! Quero agendar um ensaio de família.',
    image: 'familia-festa-aniversario',
    alt: 'Família abraçada sorrindo em festa de aniversário',
    position: '50% 30%',
    bg: 'bg-[#38373B]',
  },
  {
    tag: '03 · ESTÚDIO E EXTERNO',
    title: 'Retratos',
    text: 'No estúdio ou ao ar livre: individual, profissional para LinkedIn e formatura. Direção de pose para você sair confiante na foto.',
    cta: 'Agendar meu retrato',
    message: 'Olá Bruno! Quero agendar um ensaio de retrato.',
    image: 'retrato-chapeu-cowboy',
    alt: 'Retrato feminino com chapéu de cowboy à luz do fim de tarde',
    position: '48% 40%',
    bg: 'bg-[#2F3330]',
  },
  {
    tag: '04 · EVENTOS',
    title: 'Debutante',
    text: 'Ensaio pré-festa no estúdio ou ao ar livre e cobertura da noite: entrada, valsa, família, amigas e a decoração.',
    cta: 'Reservar data da festa',
    message: 'Olá Bruno! Quero consultar uma data para festa de debutante.',
    image: 'debutante-15-anos-neon',
    alt: 'Debutante de vestido amarelo ao lado do bolo e do letreiro neon de 15 anos',
    position: '40% 25%',
    bg: 'bg-[#2A292D]',
  },
  {
    tag: '05 · EVENTOS',
    title: 'Casamento e pré-wedding',
    text: 'Making of, cerimônia, reações dos convidados e festa, em um ou dois dias.',
    cta: 'Consultar data do casamento',
    message: 'Olá Bruno! Quero consultar a data do meu casamento.',
    image: 'pre-wedding-por-do-sol',
    alt: 'Pré-wedding ao pôr do sol: casal de costas um para o outro no alto do morro',
    position: '50% 50%',
    bg: 'bg-[#2A292D]',
  },
]

export const gallery = [
  { image: 'ensaio-externo-cavalo', alt: 'Ensaio externo com cavalo, chapéu de cowboy', caption: 'Ensaio externo', position: '45% 30%' },
  { image: 'retrato-feminino-vestido-branco', alt: 'Retrato feminino sorrindo, vestido branco', caption: 'Retrato', position: '50% 25%' },
  { image: 'amigas-festa-15-anos', alt: 'Amigas na festa de 15 anos, letreiro neon', caption: '15 anos', position: '50% 30%' },
  { image: 'retrato-atleta-muay-thai', alt: 'Atleta de muay thai em estúdio com luz dramática', caption: 'Retrato de atleta', position: '50% 25%' },
  { image: 'familia-ar-livre-entardecer', alt: 'Família ao ar livre ao entardecer', caption: 'Família', position: '50% 30%' },
  { image: 'avo-mae-bebe-geracoes', alt: 'Avó, mãe e bebê sorrindo ao anoitecer', caption: 'Gerações', position: '50% 30%' },
  { image: 'retrato-por-do-sol-montanhas', alt: 'Retrato ao pôr do sol com montanhas ao fundo', caption: 'Pôr do sol', position: '50% 28%', wide: true },
]

export const studioItems = [
  'Ensaio em família',
  'Gestante',
  'Retrato individual',
  'Foto profissional e LinkedIn',
  'Formatura',
]

export type Package = {
  title: string
  subtitle: string
  price: string
  terms?: string
  items: string[]
  cta: string
  message: string
  badge?: string
}

export const sessionPackages: Package[] = [
  {
    title: 'Retrato',
    subtitle: 'Individual, profissional ou formatura',
    price: 'R$ [___]',
    items: ['[__] minutos de ensaio', '[__] fotos tratadas', 'Direção de pose', 'Galeria online em [__] dias'],
    cta: 'Agendar ensaio',
    message: 'Olá Bruno! Quero agendar um ensaio de retrato.',
  },
  {
    title: 'Gestante',
    subtitle: 'Sozinha ou com quem você quiser',
    price: 'R$ [___]',
    items: ['[__] minutos de ensaio', '[__] fotos tratadas', '[Troca de looks]', 'Galeria online em [__] dias'],
    cta: 'Agendar ensaio',
    message: 'Olá Bruno! Quero agendar um ensaio gestante.',
  },
  {
    title: 'Família',
    subtitle: 'Até [__] pessoas (pet é bem vindo)',
    price: 'R$ [___]',
    items: ['[__] minutos de ensaio', '[__] fotos tratadas', '[Foto impressa ou quadro]', 'Galeria online em [__] dias'],
    cta: 'Agendar ensaio',
    message: 'Olá Bruno! Quero agendar um ensaio de família.',
  },
]

export const weddingPackages: Package[] = [
  {
    title: 'Civil',
    subtitle: 'Cartório, civil ao ar livre ou mini wedding',
    price: 'R$ [___]',
    terms: '[condição de pagamento]',
    items: ['Cobertura de [__] horas', 'Cerimônia e retratos do casal', '[__] fotos tratadas', 'Galeria online em [__] dias'],
    cta: 'Consultar data',
    message: 'Olá Bruno! Quero consultar uma data para o pacote Civil.',
  },
  {
    title: 'Casamento',
    subtitle: 'Do making of ao fim da festa',
    price: 'R$ [___]',
    terms: '[ex.: sinal + parcelas até a data]',
    items: [
      'Making of da noiva [e do noivo]',
      'Cerimônia religiosa ou civil',
      'Retratos do casal e família',
      'Festa, brindes e pista',
      '[__] fotos tratadas · entrega em [__] dias',
    ],
    cta: 'Quero este pacote',
    message: 'Olá Bruno! Quero o pacote Casamento com cobertura completa e consultar a data do meu casamento.',
    badge: 'COBERTURA COMPLETA',
  },
  {
    title: 'Dois dias',
    subtitle: 'Duas celebrações, uma história',
    price: 'R$ [___]',
    terms: '[condição de pagamento]',
    items: ['Tudo do pacote Casamento', 'Segundo dia (civil ou religioso)', 'Ensaio pré-wedding incluso', '[Álbum impresso / mini álbum]'],
    cta: 'Consultar data',
    message: 'Olá Bruno! Quero consultar as datas para o pacote Dois dias.',
  },
]

export const steps = [
  { title: 'Conversa no WhatsApp', text: 'Você me conta o que quer fotografar, a data e como imagina as fotos.' },
  { title: 'Proposta e reserva', text: 'Envio o pacote ideal. Com a reserva confirmada, o horário ou a data é seu.' },
  { title: 'Alinhamento', text: 'Dicas de roupa e referências para o ensaio. No casamento, cronograma com cerimonial e espaço.' },
  { title: 'O dia das fotos', text: 'No estúdio eu dirijo cada pose com calma. No casamento, cobertura discreta. Você só vive.' },
  { title: 'Entrega', text: 'Fotos tratadas em galeria online em até [__] dias. [Álbum em __ dias.]' },
]

export const testimonials = [
  { quote: '[Depoimento de cliente do ensaio gestante]', name: '[Nome]', service: 'Ensaio gestante' },
  { quote: '[Depoimento de cliente do ensaio de família]', name: '[Nome]', service: 'Ensaio de família' },
  {
    quote: '[Depoimento de Thainan & Hellen sobre o casamento na Villa da Mata]',
    name: 'Thainan & Hellen',
    service: 'Casamento · Villa da Mata',
  },
]

export const cities = ['Brodowski', 'Batatais', 'Ribeirão Preto', '[Outras cidades]']

export const faq = [
  {
    q: 'Quanto custa um ensaio ou um casamento?',
    a: 'Os ensaios no estúdio começam em R$ [___] e os casamentos em R$ [___]. O valor final depende da duração, da quantidade de fotos e de álbum. Me chame que eu te envio a proposta.',
  },
  {
    q: 'O que eu visto no ensaio?',
    a: 'Depois do agendamento eu te mando dicas de roupa, cores e acessórios que funcionam no estúdio. [Confirmar com o Bruno.]',
  },
  { q: 'Em quanto tempo recebo as fotos?', a: 'A galeria online com as fotos tratadas chega em até [__] dias. [Prévia em __ dias.]' },
  { q: 'Atende fora de Brodowski?', a: 'Sim! Batatais, Ribeirão Preto e região. [Explicar como funciona o deslocamento.]' },
  {
    q: 'Como funciona o pagamento?',
    a: '[Ex.: ensaios à vista ou no cartão; casamentos com sinal na assinatura e o restante parcelado até a data.]',
  },
  { q: 'Vocês fazem vídeo ou álbum impresso?', a: '[Confirmar com o Bruno: vídeo, álbum, mini álbum.]' },
  {
    q: 'Não sei posar. E agora?',
    a: 'Ninguém precisa saber. Nos ensaios eu dirijo cada pose com calma, e no casamento eu registro o que acontece de verdade.',
  },
]
