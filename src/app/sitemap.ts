import { getAllPosts } from "@/lib/posts"

export default async function sitemap() {
  const posts = await getAllPosts()

  return [
    {
      url: "https://www.agustinescuderoweb.com",
      lastModified: new Date(),
    },

    {
      url: "https://www.agustinescuderoweb.com/blog",
      lastModified: new Date(),
    },

    ...posts.map((post) => ({
      url: `https://www.agustinescuderoweb.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ]
}
