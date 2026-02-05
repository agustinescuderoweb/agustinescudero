import { Metadata } from "next"
import { getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import LifestyleTip from "../../../componets/blog/LifestyleTip"
import CallToAction from "../../../componets/blog/CallToAction"
import Highlight from "../../../componets/blog/Highlight"

const components = {
  LifestyleTip,
  CallToAction,
  Highlight,
}

/* ✅ Next 15 FIX */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post no encontrado",
    }
  }

  return {
    title: `${post.title} | Agustín Escudero`,
    description: post.description,
    alternates: {
      canonical: `https://www.agustinescuderoweb.com/blog/${slug}`,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        {post.title}
      </h1>

      <p className="mt-3 text-gray-600 text-lg">
        {post.description}
      </p>

      <article className="prose prose-lg mt-10">
        <MDXRemote source={post.content} components={components} />
      </article>
    </main>
  )
}
