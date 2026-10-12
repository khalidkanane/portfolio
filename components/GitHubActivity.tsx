"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight, FiCode, FiGitCommit, FiGithub, FiStar } from "react-icons/fi";
import type { GitHubData } from "@/lib/github";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(value));
}

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then(async (response) => {
        if (!response.ok) throw new Error("GitHub request failed");
        return response.json() as Promise<GitHubData>;
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="github-status">
        GitHub activity is temporarily unavailable.{" "}
        <a href="https://github.com/khalidkanane" target="_blank" rel="noreferrer">View profile <FiArrowUpRight /></a>
      </div>
    );
  }

  if (!data) return <div className="github-status">Loading GitHub activity...</div>;

  return (
    <div className="github-activity">
      <div className="github-summary">
        <div>
          <p className="eyebrow small">Live from GitHub</p>
          <h2>Recent code, projects, and contributions.</h2>
        </div>
        <a className="text-link-home" href={data.profile.html_url} target="_blank" rel="noreferrer">
          Open GitHub <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="github-metrics">
        <div><FiCode /><strong>{data.profile.public_repos}</strong><span>Public repositories</span></div>
        <div><FiGitCommit /><strong>{data.recentCommits}</strong><span>Recent commits</span></div>
        <div><FiStar /><strong>{data.repositories.reduce((total, repo) => total + repo.stargazers_count, 0)}</strong><span>Stars on recent repos</span></div>
      </div>

      <div className="github-content">
        <div className="github-repositories">
          <h3>Updated repositories</h3>
          {data.repositories.map((repository) => (
            <a className="github-repository" href={repository.html_url} target="_blank" rel="noreferrer" key={repository.id}>
              <span><strong>{repository.name}</strong><small>{repository.description || "Open-source project"}</small></span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="github-commits">
          <h3>Recent contribution activity</h3>
          {data.activity.length ? data.activity.map((event) => (
            <div className="github-commit" key={event.id}>
              <FiGithub aria-hidden="true" />
              <span><strong>{event.repo.name.split("/").pop()}</strong><small>{event.payload.commits?.[0]?.message || "Pushed changes"} · {formatDate(event.created_at)}</small></span>
            </div>
          )) : <p>No recent public push activity found.</p>}
        </div>
      </div>
    </div>
  );
}
