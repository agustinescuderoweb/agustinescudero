import { getPostBySlug, getPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import BlogImage from '../../../components/BlogImage'
import BlogCTA from '../../../components/BlogCTA'
import BackButton from '../../../components/BackButton'
import Head from 'next/head'

const components = {
  BlogImage,
  BlogCTA,
}

type Post = {
  category: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime?: string
  content: string
}

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post: { category: string; slug: string }) => ({
    category: post.category,
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  const post = getPostBySlug(slug) as Post

  return (
    <>
      <Head>
        <title>{`${post.title} | Blog – Agustín Escudero`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, ${post.title}, blog desarrollo web, Agustín Escudero`} />
        <link rel="canonical" href={`https://www.agustinescuderoweb.com/blog/${category}/${slug}`} />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <article className="max-w-3xl mx-auto px-6 py-20">

          {/* Back */}
          <div className="mb-12">
            <BackButton />
          </div>

          {/* Categoría */}
          <span className="text-lime-400 text-xs font-semibold tracking-[0.18em] uppercase">
            {post.category}
          </span>

          {/* Título */}
          <h1 className="mt-4 text-4xl md:text-[2.8rem] font-bold tracking-tight leading-[1.1] text-[#f0ede8]">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 text-white/50 text-lg leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 mt-6 text-xs text-white/30 font-medium tracking-wide">
            <span>{post.publishedAt}</span>
            {post.readingTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.readingTime}</span>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="border-b border-white/[0.07] my-12" />

          {/* Contenido MDX */}
          <div
            className="
              prose prose-invert prose-lg max-w-none

              prose-headings:font-bold
              prose-headings:tracking-tight
              prose-headings:text-[#f0ede8]

              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3

              prose-p:text-white/55
              prose-p:leading-[1.85]
              prose-p:text-[1rem]

              prose-strong:text-[#f0ede8]
              prose-strong:font-semibold

              prose-li:text-white/55
              prose-li:leading-relaxed

              prose-blockquote:border-l-lime-400
              prose-blockquote:border-l-2
              prose-blockquote:text-white/40
              prose-blockquote:not-italic
              prose-blockquote:pl-5

              prose-code:text-lime-400
              prose-code:bg-white/[0.05]
              prose-code:px-1.5
              prose-code:py-0.5
              prose-code:rounded
              prose-code:text-sm
              prose-code:font-mono
              prose-code:before:content-none
              prose-code:after:content-none

              prose-pre:bg-[#111111]
              prose-pre:border
              prose-pre:border-white/[0.07]
              prose-pre:rounded-xl

              prose-hr:border-white/[0.07]

              prose-img:rounded-xl
              prose-img:border
              prose-img:border-white/[0.07]
            "
          >
            <MDXRemote source={post.content} components={components} />
          </div>

        </article>
      </main>
    </>
  )
}