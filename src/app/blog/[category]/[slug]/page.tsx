import { getPostBySlug, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogImage from "../../../components/BlogImage";
import BlogCTA from "../../../components/BlogCTA";


const components = {
  BlogImage,
  BlogCTA,
};

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post: any) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-neutral-950 text-zinc-100">
  <article className="max-w-4xl mx-auto px-6 py-24">

    {/* CATEGORY */}
    <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-medium">
      {post.category}
    </span>

    {/* TITLE */}
    <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-5">
      {post.title}
    </h1>

    {/* EXCERPT */}
    <p className="text-zinc-300 text-xl mt-8 leading-relaxed max-w-3xl">
      {post.excerpt}
    </p>

    {/* META */}
    <div className="flex items-center gap-4 mt-8 text-sm text-zinc-500">
      <span>{post.publishedAt}</span>

      {post.readingTime && (
        <>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span>{post.readingTime}</span>
        </>
      )}
    </div>

    {/* DIVIDER */}
    <div className="border-b border-zinc-800 my-14" />

    {/* CONTENT */}
    <div
      className="
        prose
        prose-invert
        prose-lg
        max-w-none

        prose-headings:tracking-tight
        prose-headings:text-white

        prose-p:text-zinc-300
        prose-p:leading-8

        prose-strong:text-white

        prose-li:text-zinc-300

        prose-a:text-white
        prose-a:no-underline
        hover:prose-a:text-zinc-300

        prose-hr:border-zinc-800

        prose-blockquote:border-zinc-700
        prose-blockquote:text-zinc-300
      "
    >
      <MDXRemote
        source={post.content}
        components={components}
      />
    </div>

  </article>
</main>
  );
}