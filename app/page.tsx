import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Backend: ["Laravel", "Node.js", "REST APIs", "Authentication"],
  Database: ["PostgreSQL", "MySQL", "Prisma", "Data modeling"],
  Tools: ["Git", "Docker", "Figma", "Vercel"],
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>;
}

function ProjectPreview({ variant }: { variant: string }) {
  return <div className={`project-preview project-preview-${variant}`} aria-hidden="true"><div className="preview-topbar"><span /><span /><span /></div><div className="preview-content">
    {variant === "library" && <><div className="preview-sidebar" /><div className="book-row"><i /><i /><i /></div><div className="book-row short"><i /><i /><i /></div></>}
    {variant === "food" && <><div className="food-title" /><div className="food-grid"><i /><i /><i /><i /></div></>}
    {variant === "ml" && <><div className="chart chart-large" /><div className="chart-row"><div className="chart" /><div className="chart" /></div></>}
  </div></div>;
}

export default function Home() {
  return <main>
    <section id="home" className="hero section-shell"><div className="hero-copy"><p className="eyebrow">Available for opportunities <span>•</span> 2026</p><h1>Hi, I&apos;m <em>Khalid</em>.<br />I build things for the web.</h1><p className="hero-lede">Full-Stack Developer building modern web applications with Next.js, TypeScript, Laravel, and PostgreSQL.</p><div className="button-row"><Link className="button button-primary" href="#projects">View Projects <span>↗</span></Link><a className="button button-quiet" href="https://github.com" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div><div className="tech-strip">Next.js <span>•</span> TypeScript <span>•</span> Laravel <span>•</span> PostgreSQL</div></div><div className="hero-terminal" aria-label="A code preview showing Khalid&apos;s stack"><div className="terminal-bar"><span /><span /><span /><small>khalid.config.ts</small></div><pre><code><span className="code-muted">{"// building things people use"}</span>{"\n"}<span className="code-keyword">const</span> khalid = {'{'}{"\n"}  role: <span className="code-string">&quot;Full-Stack Dev&quot;</span>,{"\n"}  stack: [<span className="code-string">&quot;Next.js&quot;</span>, <span className="code-string">&quot;Laravel&quot;</span>],{"\n"}  openToWork: <span className="code-value">true</span>{"\n"}{'}'}</code></pre><div className="terminal-glow" /></div><a href="#about" className="scroll-cue" aria-label="Scroll to about section">↓ <span>scroll to explore</span></a></section>

    <section id="about" className="section-shell split-section"><SectionHeading eyebrow="02 / About me" title="A developer who cares about the details." /><div className="about-copy"><p>I&apos;m Khalid, a full-stack developer who enjoys turning complex problems into simple, useful products.</p><p>I care about the space where thoughtful design meets solid engineering. Right now, I&apos;m deepening my knowledge of scalable systems, accessible interfaces, and the craft of shipping work that lasts.</p><Link className="text-link" href="#contact">Let&apos;s work together <span>↗</span></Link></div></section>

    <section id="skills" className="section-shell skills-section"><SectionHeading eyebrow="03 / Skills" title="The tools in my toolbox." /><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><h3>{category}</h3><ul>{items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div></section>

    <section id="projects" className="section-shell projects-section"><div className="projects-intro"><SectionHeading eyebrow="04 / Selected work" title="Projects I&apos;m proud of." /><p>A few things I&apos;ve built while learning, experimenting, and solving real problems.</p></div><div className="project-list">{PROJECTS.map((project) => <article className="project-card" key={project.slug}><div className="project-info"><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>View project <span>↗</span></Link></div><ProjectPreview variant={project.variant} /></article>)}</div></section>

    <section id="experience" className="section-shell timeline-section"><SectionHeading eyebrow="05 / Experience" title="Where I&apos;ve been learning." /><div className="timeline"><div className="timeline-item"><span>2024 — Present</span><div><h3>Independent Full-Stack Developer</h3><p>Building personal products, collaborating on client work, and sharpening the full development lifecycle.</p></div></div><div className="timeline-item"><span>2023 — 2024</span><div><h3>Web Development Projects</h3><p>Explored modern JavaScript frameworks, API design, relational databases, and deployment workflows.</p></div></div></div></section>

    <section id="education" className="section-shell education-section"><SectionHeading eyebrow="06 / Education" title="Always still learning." /><div className="education-line"><div><h3>Computer Science &amp; Web Development</h3><p>Focused on building a strong foundation in software engineering, data structures, and the web platform.</p></div><span>Ongoing</span></div></section>

    <section id="contact" className="contact-section"><div className="section-shell contact-inner"><SectionHeading eyebrow="07 / Contact" title="Let&apos;s build something useful." /><p>I&apos;m open to conversations about interesting projects, collaborations, and opportunities.</p><div className="contact-links"><a href="mailto:your.email@example.com">Email <span>↗</span></a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div></section>
    <footer className="site-footer section-shell"><span>© 2026 Khalid Kanane</span><span>Designed &amp; built with care</span><a href="#home">Back to top ↑</a></footer>
  </main>;
}
