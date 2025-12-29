import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted mb-4">
            <Calendar size={14} />
            {formatDate(post.date)}
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-muted">{post.description}</p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-card prose-pre:border prose-pre:border-border">
          {/* Render markdown content as simple HTML */}
          <div
            dangerouslySetInnerHTML={{
              __html: renderMarkdown(post.content),
            }}
          />
        </div>
      </Container>
    </article>
  );
}

// Simple markdown to HTML converter for basic content
function renderMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Lists
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    // Paragraphs
    .replace(/\n\n/g, "</p><p>")
    // Wrap in paragraphs
    .replace(/^(.+)$/gm, (match) => {
      if (
        match.startsWith("<h") ||
        match.startsWith("<li") ||
        match.startsWith("<p") ||
        match.startsWith("</p")
      ) {
        return match;
      }
      return `<p>${match}</p>`;
    })
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, "")
    .replace(/<p><h/g, "<h")
    .replace(/<\/h(\d)><\/p>/g, "</h$1>")
    .replace(/<p><li>/g, "<ul><li>")
    .replace(/<\/li><\/p>/g, "</li></ul>");
}
