import Link from 'next/link'
import BackButton from '../components/BackButton'
import Head from 'next/head'

const categories = [
 
  {
    slug: 'paginas-web',
    title: 'Páginas Web',
    description: 'Diseño y desarrollo de páginas web profesionales para emprendedores, empresas y negocios que buscan vender más online.',
    tag: '01',
  },
   {
    slug: 'ecommerce',
    title: 'Ecommerce',
    description: 'Estrategias para crear tiendas online, mejorar conversiones y vender productos por internet.',
    tag: '02',
  },
  {
    slug: 'seo',
    title: 'SEO',
    description: 'Estrategias SEO para aparecer en Google, aumentar visitas y conseguir clientes desde internet.',
    tag: '03',
  },
  {
    slug: 'inteligencia-artificial',
    title: 'Inteligencia Artificial',
    description: 'Herramientas de inteligencia artificial para automatizar procesos y mejorar negocios.',
    tag: '04',
  },
   {
    slug: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Estrategias digitales para captar clientes, mejorar conversiones y hacer crecer negocios.',
    tag: '05',
  },
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Desarrollo Web, Marketing, SEO e IA – Agustín Escudero</title>
        <meta
          name="description"
          content="Artículos y recursos sobre desarrollo web, marketing digital, SEO e inteligencia artificial para emprendedores y negocios en Mendoza y Argentina."
        />
        <meta
          name="keywords"
          content="blog desarrollo web, marketing digital Mendoza, SEO para negocios, inteligencia artificial negocios, recursos web Argentina"
        />
        <link rel="canonical" href="https://www.agustinescuderoweb.com/blog" />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">

          {/* Back */}
          <div className="mb-12">
            <BackButton />
          </div>

          {/* Header */}
          <div className="mb-14">
            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              Blog
            </span>
            <h1 className="mt-3 text-4xl md:text-[2.8rem] font-bold tracking-tight text-[#f0ede8] leading-tight">
              Artículos y recursos
            </h1>
            <p className="mt-4 text-white/45 text-[0.95rem] leading-relaxed max-w-lg">
              Aprende cómo crear páginas web profesionales, mejorar el SEO de tu negocio, vender online y aprovechar la inteligencia artificial para conseguir más clientes.
            </p>
          </div>

          {/* Grid categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="
                  group
                  bg-[#111111]
                  border border-white/[0.07]
                  rounded-2xl p-7
                  flex flex-col gap-4
                  transition-all duration-300
                  hover:border-lime-400/30
                  hover:-translate-y-1
                  !no-underline
                "
              >
                <span className="text-lime-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  {category.tag}
                </span>

                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-[#f0ede8] tracking-tight">
                    {category.title}
                  </h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                <p className="text-white/45 text-sm leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-2 border-t border-white/[0.05]">
                  <span className="text-xs text-lime-400/60 font-medium group-hover:text-lime-400 transition-colors duration-200">
                    Ver artículos →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
    </>
  )
}