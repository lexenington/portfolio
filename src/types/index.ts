export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  type: "work" | "education";
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  content: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  githubUsername: string;
  email: string;
  social: SocialLink[];
}
