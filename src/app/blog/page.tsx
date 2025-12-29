import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on software development.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-20">
      <Container>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
        <p className="text-lg text-muted mb-12">
          Thoughts, tutorials, and insights on software development.
        </p>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-border pb-8 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  <div className="flex items-center gap-2 text-sm text-muted mb-2">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </div>

                  <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-muted">{post.description}</p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-card border border-border rounded text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
