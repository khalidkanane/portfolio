import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

const stats = [
  { value: "04", label: "Selected builds" },
  { value: "03", label: "Core disciplines" },
  { value: "∞", label: "Curiosity to explore" },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-shell section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Full-stack developer · AI enthusiast</p>
          <h1>Building digital products with <em>clarity.</em></h1>
          <p className="hero-lede">I&apos;m Khalid Kanane — a developer focused on thoughtful interfaces, resilient systems, and practical AI. I turn complex ideas into useful software.</p>
          <div className="hero-actions">
            <Link className="hero-button primary" href="/projects">Explore my work <span>↗</span></Link>
            <a className="hero-button quiet" href={`mailto:${SOCIAL_LINKS.email}`}>Start a conversation</a>
          </div>
          <p className="tech-strip">Currently working with <span>Next.js</span> TypeScript <span>·</span> Python <span>·</span> Laravel</p>
        </div>
        <div className="hero-terminal" aria-label="Developer profile summary">
          <div className="terminal-bar"><span /><span /><span /><small>khalid@portfolio ~ %</small></div>
          <pre><span className="code-muted">const</span> <span className="code-keyword">developer</span> = {'{'}{`\n  name: `}<span className="code-string">&quot;Khalid Kanane&quot;</span>{`,\n  focus: `}<span className="code-string">&quot;useful software&quot;</span>{`,\n  stack: [`}<span className="code-string">&quot;web&quot;</span>{`, `}<span className="code-string">&quot;data&quot;</span>{`, `}<span className="code-string">&quot;AI&quot;</span>{`],\n  status: `}<span className="code-value">&quot;available&quot;</span>{`\n}`}</pre>
          <div className="terminal-glow" />
          <div className="terminal-status"><span /> Open to meaningful projects</div>
        </div>
        <a className="scroll-cue" href="#selected-work">↓ <span>Scroll to explore</span></a>
      </section>

      <section id="selected-work" className="home-work section-shell">
        <div className="section-heading"><p className="eyebrow"><span>02</span> Selected work</p><h2>A small selection of things I&apos;ve made.</h2></div>
        <div className="home-project-grid">{PROJECTS.slice(0, 3).map((project, index) => <Link className={`home-project home-project-${project.variant}`} href={`/projects/${project.slug}`} key={project.slug}><span className="project-number">0{index + 1}</span><div className="home-project-art"><span>{project.variant === "ml" ? "ML" : project.variant === "food" ? "FOOD" : "LIB"}</span></div><h3>{project.title}</h3><p>{project.description}</p><span className="text-link">View case study ↗</span></Link>)}</div>
      </section>

      <section className="home-note section-shell"><p className="eyebrow"><span>03</span> A little about me</p><div><h2>Good work lives between <em>design</em> and engineering.</h2><Link className="text-link" href="/about">More about my approach ↗</Link></div></section>

      <div className="stats-row section-shell" aria-label="Key metrics">{stats.map((stat) => <div className="stat-item" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
    </main>
  );
}
