import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const posts = await getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `https://agustinescuderoweb.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  return [
    {
      url: "https://agustinescuderoweb.com",
      lastModified: new Date(),
    },

    ...postUrls,
  ];
}