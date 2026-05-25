import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "src/content/blog"
);

export function getPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");

    const fullPath = path.join(
      postsDirectory,
      fileName
    );

    const fileContents = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(
    postsDirectory,
    `${slug}.mdx`
  );

  const fileContents = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  };
}