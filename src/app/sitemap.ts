import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/servicios",
    "/servicios/web-business",
    "/servicios/ecommerce-business",
    "/portafolio",
    "/contactos",
    "/ia",
    "/blog",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const posts = getPosts()

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.category}/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
  }));

  const categoryRoutes = Array.from(
    new Set(posts.map((post) => post.category))
  ).map((category) => ({
    url: `${SITE_URL}/blog/${category}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
