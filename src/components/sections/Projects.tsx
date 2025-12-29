import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { GitHubRepo } from "@/types";
import { Container } from "@/components/layout/Container";

interface ProjectsProps {
  repos: GitHubRepo[];
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Dockerfile: "bg-blue-600",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  default: "bg-gray-500",
};

export function Projects({ repos }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <Container>
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <div className="h-1 w-16 bg-primary mb-8" />

        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {repo.name}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted text-sm mb-4 line-clamp-2">
                {repo.description || "No description available"}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className={`w-3 h-3 rounded-full ${languageColors[repo.language] || languageColors.default}`}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks_count}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/lexenington?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View all projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
