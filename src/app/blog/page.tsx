import Link from "next/link";

const categories = [
  {
    slug: "marketing",
    title: "Marketing",
    description:
      "Estrategias digitales para conseguir más clientes y ventas.",
  },

  {
    slug: "sitios-web",
    title: "Sitios Web",
    description:
      "Desarrollo de páginas web modernas, rápidas y profesionales.",
  },

  {
    slug: "seo",
    title: "SEO",
    description:
      "Posicionamiento en Google y tráfico orgánico para negocios.",
  },

  {
    slug: "ia",
    title: "IA",
    description:
      "Automatización e inteligencia artificial aplicada a negocios.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto pt-17 lg:pt-52 pb-20 px-4">
      <h1 className="text-5xl font-bold mb-22">
        Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/${category.slug}`}
            className="border border-white/10 rounded-2xl p-8 hover:border-white transition"
          >
            <h2 className="text-3xl font-bold">
              {category.title}
            </h2>

            <p className="text-gray-400 mt-4">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}