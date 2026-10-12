import { SOCIAL_LINKS } from "@/lib/constants";

export const GITHUB_USERNAME = SOCIAL_LINKS.github.split("/").filter(Boolean).pop() ?? "";

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  pushed_at: string | null;
  fork: boolean;
}

export interface GitHubActivity {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: { commits?: Array<{ sha: string; message: string }> };
}

export interface GitHubData {
  profile: GitHubProfile;
  repositories: GitHubRepository[];
  activity: GitHubActivity[];
  recentCommits: number;
}

export async function getGitHubData(): Promise<GitHubData> {
  const headers = { Accept: "application/vnd.github+json" };
  const [profileResponse, repositoriesResponse, activityResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`, {
      headers,
      next: { revalidate: 900 },
    }),
  ]);

  if (!profileResponse.ok || !repositoriesResponse.ok || !activityResponse.ok) {
    throw new Error("GitHub data is temporarily unavailable.");
  }

  const [profile, repositories, activity] = await Promise.all([
    profileResponse.json() as Promise<GitHubProfile>,
    repositoriesResponse.json() as Promise<GitHubRepository[]>,
    activityResponse.json() as Promise<GitHubActivity[]>,
  ]);

  const recentCommits = activity.reduce(
    (total, event) => total + (event.type === "PushEvent" ? event.payload.commits?.length ?? 0 : 0),
    0,
  );

  return {
    profile,
    repositories: repositories.filter((repository) => !repository.fork).slice(0, 4),
    activity: activity.filter((event) => event.type === "PushEvent").slice(0, 5),
    recentCommits,
  };
}
