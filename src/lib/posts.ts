import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".mdx", "")
    const filePath = path.join(postsDirectory, fileName)

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContent)

    return {
      slug,
      ...(data as {
        title: string
        description: string
        date: string
        category: string
      }),
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)

  const fileContent = fs.readFileSync(filePath, "utf8")

  const { data, content } = matter(fileContent)

  return {
    slug,
    content,
    ...(data as {
      title: string
      description: string
      date: string
      category: string
    }),
  }
}

