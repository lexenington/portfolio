import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Hi, I&apos;m{" "}
          <span className="text-primary">{siteConfig.name.split(" ")[0]}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-6">{siteConfig.title}</p>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
          {siteConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <a
          href="#about"
          className="inline-block mt-16 text-muted hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} />
        </a>
      </Container>
    </section>
  );
}
