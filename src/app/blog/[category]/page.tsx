import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import BackButton from '../../components/BackButton'
import Head from 'next/head'

const categoryLabels: Record<string, { title: string; description: string }> = {
  marketing: {
    title: 'Marketing Digital',
    description: 'Artículos sobre estrategias digitales para conseguir más clientes y ventas en Mendoza y Argentina.',
  },
  'sitios-web': {
    title: 'Sitios Web',
    description: 'Recursos y guías sobre desarrollo de páginas web modernas, rápidas y profesionales.',
  },
  seo: {
    title: 'SEO',
    description: 'Artículos sobre posicionamiento en Google y tráfico orgánico para negocios.',
  },
  ia: {
    title: 'Inteligencia Artificial',
    description: 'Contenido sobre automatización e inteligencia artificial aplicada a negocios.',
  },
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const posts = getPosts()

  const filteredPosts = posts.filter(
    (post: { title: string; slug: string; excerpt: string; category: string }) =>
      post.category === category
  )

  const meta = categoryLabels[category] ?? {
    title: category.charAt(0).toUpperCase() + category.slice(1),
    description: `Artículos sobre ${category} para emprendedores y negocios.`,
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} | Blog – Agustín Escudero`}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={`${category}, blog ${category}, ${meta.title} Mendoza, desarrollo web Argentina`} />
        <link rel="canonical" href={`https://www.agustinescuderoweb.com/blog/${category}`} />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">

          {/* Back */}
          <div className="mb-12">
            <BackButton />
          </div>

          {/* Header */}
          <div className="mb-14 border-b border-white/[0.06] pb-14">
            <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
              Blog
            </span>
            <h1 className="mt-3 text-4xl md:text-[2.8rem] font-bold tracking-tight text-[#f0ede8] capitalize leading-tight">
              {category}
            </h1>
            <p className="mt-3 text-white/40 text-sm">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'}
            </p>
          </div>

          {/* Lista de posts */}
          <div className="flex flex-col gap-0">
            {filteredPosts.map((post: {
              title: string
              slug: string
              excerpt: string
              category: string
            }, index: number) => (
              <Link
                key={post.slug}
                href={`/blog/${post.category}/${post.slug}`}
                className="
                  group
                  flex flex-col md:flex-row md:items-start md:justify-between
                  gap-3 md:gap-12
                  py-8
                  border-b border-white/[0.06]
                  transition-all duration-200
                  !no-underline
                "
              >
                {/* Número */}
                <span className="text-xs text-white/20 font-semibold tracking-[0.12em] mt-1 flex-shrink-0 w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Contenido */}
                <div className="flex-1">
                  <h2 className="
                    text-lg md:text-xl font-semibold text-[#f0ede8] tracking-tight
                    group-hover:text-lime-400 transition-colors duration-200
                  ">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-white/40 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Flecha */}
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
                  className="
                    text-lime-400 flex-shrink-0 mt-1
                    opacity-0 group-hover:opacity-100
                    translate-x-[-4px] group-hover:translate-x-0
                    transition-all duration-200
                  "
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-white/30 text-sm">
                No hay artículos en esta categoría todavía.
              </p>
            </div>
          )}

        </div>
      </main>
    </>
  )
}