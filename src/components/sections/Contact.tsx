import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Get in Touch
        </h2>
        <div className="h-1 w-16 bg-primary mb-8" />

        <div className="max-w-2xl">
          <p className="text-lg text-muted mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {siteConfig.social.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <Icon size={24} className="text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{link.name}</p>
                    <p className="text-sm text-muted">
                      {link.icon === "email"
                        ? siteConfig.email
                        : `@${siteConfig.githubUsername}`}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-primary transition-colors"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
