import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        tags: data.tags || [],
        content,
      } as BlogPost;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}
