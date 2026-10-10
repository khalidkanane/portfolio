import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

const stats = [
  { value: "12", label: "Years of experience" },
  { value: "26", label: "Projects completed" },
  { value: "8", label: "Technologies mastered" },
  { value: "500", label: "Code commits" },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-shell section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Software Developer</p>
          <h1>
            Hello I&apos;m
            <span>Luke Coleman</span>
          </h1>
          <p className="hero-lede">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>

          <div className="hero-actions">
            <Link className="hero-button primary" href="/projects">
              Download CV <span>↗</span>
            </Link>
            <div className="social-buttons" aria-label="Social links">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                G
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="X">
                X
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile card illustration">
          <div className="profile-ring">
            <div className="profile-avatar">
              <div className="avatar-face" />
            </div>
          </div>
        </div>
      </section>

      <div className="stats-row section-shell" aria-label="Key metrics">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
