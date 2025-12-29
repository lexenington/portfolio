import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {siteConfig.social.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
