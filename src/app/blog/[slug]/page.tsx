// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug } from "@/lib/posts" // Asegurate que tu función MDX esté bien importada

// Componentes del blog
import LifestyleTip from "@/componets/blog/LifestyleTip"
import Highlight from "@/componets/blog/Highlight"
import CallToAction from "@/componets/blog/CallToAction"

const components = {
  LifestyleTip,
  Highlight,
  CallToAction,
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // ⚠️ Aquí asumimos que tu función getPostBySlug ya retorna el post correcto
  const post = await getPostBySlug(params.slug)

  if (!post) return notFound()

  return (
    <main className="bg-white">
      {/* HERO COVER */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">{post.description}</p>
          </div>
        </div>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* INFO */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>✍️ Agustín Escudero</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        {/* ARTICLE */}
        <article className="prose prose-lg max-w-none mx-auto space-y-6 prose-headings:tracking-tight prose-headings:text-black prose-p:text-gray-700 prose-a:text-black prose-a:font-semibold prose-strong:text-black prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:text-gray-600 prose-img:rounded-3xl prose-img:shadow-xl prose-img:mx-auto">
          <MDXRemote source={post.content} components={components} />
        </article>

        {/* CTA FINAL */}
        <section className="mt-20 rounded-3xl bg-black text-white p-10 shadow-2xl text-center">
          <h3 className="text-3xl font-bold">
            ¿Querés una web que transforme visitas en clientes reales?
          </h3>
          <p className="mt-4 text-white/80 text-lg">
            Diseño landing pages premium para entrenadores y marcas fitness que
            quieren vender más con SEO estratégico.
          </p>
          <a
            href="/servicios/landing"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            Ver mi servicio 🚀
          </a>
        </section>
      </section>
    </main>
  )
}
