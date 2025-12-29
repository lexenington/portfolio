import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) {
    return (
      <section id="blog" className="py-20 bg-card/50">
        <Container>
          <h2 className="text-3xl font-bold text-foreground mb-2">Blog</h2>
          <div className="h-1 w-16 bg-primary mb-8" />
          <p className="text-muted">
            Coming soon! I&apos;ll be sharing my thoughts and learnings here.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-card/50">
      <Container>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Latest Posts
        </h2>
        <div className="h-1 w-16 bg-primary mb-8" />

        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-2 text-sm text-muted mb-3">
                <Calendar size={14} />
                {formatDate(post.date)}
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h3>

              <p className="text-muted text-sm line-clamp-2">
                {post.description}
              </p>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
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
          ))}
        </div>

        {posts.length > 3 && (
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View all posts
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
