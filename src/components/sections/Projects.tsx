import { ExternalLink, Github, Star, GitFork, CheckCircle2 } from "lucide-react";
import { GitHubRepo } from "@/types";
import { Container } from "@/components/layout/Container";
import { featuredProjects } from "@/config/content";

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

        <div className="space-y-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="bg-background border border-primary/30 rounded-lg p-8 hover:border-primary/60 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-muted text-sm">{project.tagline}</p>
                </div>
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted border border-border rounded-full px-3 py-1.5">
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {project.status}
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-background text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                    >
                      Visit site
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted mt-4 mb-5 max-w-3xl">
                {project.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted border border-border rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

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
