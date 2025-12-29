import { GitHubRepo } from "@/types";

export async function getPinnedRepos(username: string): Promise<GitHubRepo[]> {
  // If no token, fall back to fetching starred repos via REST API
  if (!process.env.GITHUB_TOKEN) {
    console.warn("No GITHUB_TOKEN, falling back to starred repos");
    return getStarredRepos(username, 6);
  }

  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              nameWithOwner
              description
              url
              homepageUrl
              stargazerCount
              forkCount
              primaryLanguage {
                name
              }
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              createdAt
              updatedAt
              isFork
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`GitHub GraphQL API error: ${response.status}`);
      // Fall back to starred repos
      return getStarredRepos(username, 6);
    }

    const data = await response.json();

    if (data.errors) {
      console.warn("GitHub GraphQL errors:", data.errors);
      return getStarredRepos(username, 6);
    }

    const pinnedItems = data.data?.user?.pinnedItems?.nodes || [];

    if (pinnedItems.length === 0) {
      // No pinned repos, fall back to starred repos
      return getStarredRepos(username, 6);
    }

    // Map GraphQL response to our GitHubRepo type
    const repos: GitHubRepo[] = pinnedItems.map((item: any) => ({
      id: item.id,
      name: item.name,
      full_name: item.nameWithOwner,
      description: item.description,
      html_url: item.url,
      homepage: item.homepageUrl,
      stargazers_count: item.stargazerCount,
      forks_count: item.forkCount,
      language: item.primaryLanguage?.name || null,
      topics: item.repositoryTopics?.nodes?.map((t: any) => t.topic.name) || [],
      created_at: item.createdAt,
      updated_at: item.updatedAt,
      fork: item.isFork,
    }));

    // Sort by created_at (most recent first)
    repos.sort((a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    return repos;
  } catch (error) {
    console.warn("Failed to fetch pinned repos, falling back to starred repos:", error);
    return getStarredRepos(username, 6);
  }
}

export async function getStarredRepos(username: string, perPage: number = 6): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/starred?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.warn(`GitHub API error fetching starred: ${response.status}`);
      return getFallbackProjects();
    }

    let repos: GitHubRepo[] = await response.json();

    // Sort by created_at (most recent first)
    repos.sort((a, b) =>
      new Date(b.created_at || b.updated_at).getTime() -
      new Date(a.created_at || a.updated_at).getTime()
    );

    return repos.slice(0, perPage);
  } catch (error) {
    console.warn("Failed to fetch starred repos:", error);
    return getFallbackProjects();
  }
}

export async function getGitHubRepos(
  username: string,
  options?: {
    perPage?: number;
    excludeForks?: boolean;
    sortBy?: "created" | "updated";
  }
): Promise<GitHubRepo[]> {
  const { perPage = 6, excludeForks = true, sortBy = "created" } = options || {};

  try {
    const endpoint = `https://api.github.com/users/${username}/repos?sort=${sortBy}&per_page=${perPage * 2}`;

    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`GitHub API error: ${response.status}`);
      return getFallbackProjects();
    }

    let repos: GitHubRepo[] = await response.json();

    if (excludeForks) {
      repos = repos.filter((repo) => !repo.fork);
    }

    // Sort by created_at date (most recent first)
    if (sortBy === "created") {
      repos.sort((a, b) =>
        new Date(b.created_at || b.updated_at).getTime() -
        new Date(a.created_at || a.updated_at).getTime()
      );
    }

    return repos.slice(0, perPage);
  } catch (error) {
    console.warn("Failed to fetch GitHub repos, using fallback:", error);
    return getFallbackProjects();
  }
}

function getFallbackProjects(): GitHubRepo[] {
  return [
    {
      id: 1,
      name: "portfolio",
      full_name: "lexenington/portfolio",
      description: "My personal portfolio website",
      html_url: "https://github.com/lexenington/portfolio",
      homepage: null,
      stargazers_count: 0,
      forks_count: 0,
      language: "TypeScript",
      topics: ["portfolio", "nextjs", "tailwind"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      fork: false,
    },
  ];
}
