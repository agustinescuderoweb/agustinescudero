import { getAllPosts } from "@/lib/posts"
import Link from "next/link"
import Image from "next/image"
import { GiH2O } from "react-icons/gi"


export const metadata = {
  title: "Blog | Webs y Marketing para Entrenadores",
  description:
    "Consejos sobre diseño web, SEO y landing pages premium para negocios fitness.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="uppercase tracking-widest text-sm text-gray-500 font-semibold">
            El blog de conversiones digitales
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
            Diseño web y SEO para emprendedores 💪
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-2xl">
            Webs, SEO y estrategia para negocios modernos
          </p>
        </div>
      </section>

      {/* POSTS GRID */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition"
              >

               {/* Cover image */}
              <div className="relative h-52 w-full">
                       <Image
                          src={post.cover}
                          alt={post.title}
                          fill
               className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Fitness Business
                  </p>

                  {/* Title */}
                  <h2 className="mt-3 text-xl font-bold group-hover:underline">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read more */}
                  <p className="mt-6 text-sm font-medium text-black">
                    Leer artículo →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold">
              ¿Estás listo para llevar tu marca al siguiente nivel?
          </h2>

          <p className="mt-3 text-gray-600">
               Landing pages pensadas para convertir tráfico en consultas y ventas todos los días.
          </p>

          <Link
            href="/servicios/landing"
            className="inline-block mt-8 rounded-2xl bg-black px-8 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Ver servicio →
          </Link>
        </div>
      </section>
    </main>
  )
}
