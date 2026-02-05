import { getAllPosts } from "@/lib/posts"
import Link from "next/link"

export const metadata = {
  title: "Blog | Webs y Marketing para Entrenadores",
  description:
    "Consejos sobre diseño web, SEO y landing pages premium para negocios fitness.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">
        Blog de Webs para Entrenadores y Negocios Fitness
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Estrategias de SEO, landing pages y diseño premium para convertir seguidores en clientes.
      </p>

      <section className="mt-12 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold hover:underline"
            >
              {post.title}
            </Link>

            <p className="mt-2 text-gray-600">{post.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

