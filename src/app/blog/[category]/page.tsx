import Link from "next/link";
import { getPosts } from "@/lib/posts";
import BackButton from "../../components/BackButton";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {

  const { category } = await params;

  const posts = getPosts();

  const filteredPosts = posts.filter(
    (post: {
      title: string;
      slug: string;
      excerpt: string;
      category: string;
    }) => post.category === category
  );

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">

      <div className="mb-20" ><BackButton /></div>

      <div><h1 className="text-5xl font-bold capitalize mb-10">
        {category}
      </h1></div>

      <div className="space-y-8">
        {filteredPosts.map((post: {
          title: string;
          slug: string;
          excerpt: string;
          category: string;
        }) => (
          <article
            key={post.slug}
            className="border-b border-white/10 pb-6"
          >
            <Link
              href={`/blog/${post.category}/${post.slug}`}
            >
              <h2 className="text-3xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-400 mt-3">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}