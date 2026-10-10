import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";
import { SOCIAL_LINKS } from "@/lib/constants";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Laravel", "Node.js", "PHP", "REST APIs", "MySQL", "PostgreSQL"],
  "AI & Data": ["Python", "Machine Learning", "Data Science", "OpenCV", "Gemini API", "AI Agents"],
  Tools: ["Git", "GitHub", "GitHub Actions", "Firebase", "Vercel", "Figma", "Linux"],
};

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>;
}

export function ProjectPreview({ variant }: { variant: string }) {
  return <div className={`project-preview project-preview-${variant}`} aria-hidden="true"><div className="preview-topbar"><span /><span /><span /></div><div className="preview-content">
    {variant === "library" && <><div className="preview-sidebar" /><div className="book-row"><i /><i /><i /></div><div className="book-row short"><i /><i /><i /></div></>}
    {variant === "food" && <><div className="food-title" /><div className="food-grid"><i /><i /><i /><i /></div></>}
    {variant === "ml" && <><div className="chart chart-large" /><div className="chart-row"><div className="chart" /><div className="chart" /></div></>}
  </div></div>;
}

export function AboutPage() {
  return (
    <main>
      <section className="section-shell page-hero split-section">
        <SectionHeading eyebrow="01 / About me" title="A developer building toward AI." />
        <div className="about-copy">
          <p>I&apos;m Khalid Kanane, a Full Stack Developer and AI enthusiast focused on building modern, useful, and scalable digital products.</p>
          <p>My work blends frontend engineering, backend architecture, and machine learning ideas to create intelligent applications that solve real problems. I enjoy working with Next.js, TypeScript, Laravel, Java, Python, and AI-powered workflows.</p>
          <div className="contact-links" style={{ marginTop: "24px" }}>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href={SOCIAL_LINKS.cv} target="_blank" rel="noreferrer">CV <span>↗</span></a>
          </div>
          <Link className="text-link" href="/contact">Let&apos;s work together <span>↗</span></Link>
        </div>
      </section>

      <section className="section-shell timeline-section">
        <SectionHeading eyebrow="02 / Experience" title="Where I&apos;ve been learning and building." />
        <div className="timeline">
          <div className="timeline-item">
            <span>2024 — Present</span>
            <div>
              <h3>Full-Stack Developer</h3>
              <p>Building portfolio projects, web applications, and product ideas using Next.js, TypeScript, Laravel, and modern deployment workflows.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>2023 — 2024</span>
            <div>
              <h3>Computer Engineering Student & Project Builder</h3>
              <p>Worked on software engineering, AI/data-driven projects, and application development while strengthening backend, frontend, and problem-solving skills.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>2022 — 2023</span>
            <div>
              <h3>Frontend & Web App Exploration</h3>
              <p>Explored modern JavaScript frameworks, responsive design, API integration, and database-backed application development.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function SkillsPage() {
  return <main><section className="section-shell page-hero skills-section"><SectionHeading eyebrow="01 / Skills" title="The tools in my toolbox." /><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><h2>{category}</h2><ul>{items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div></section></main>;
}

export function ProjectsPage() {
  return <main><section className="section-shell page-hero projects-section"><div className="projects-intro"><SectionHeading eyebrow="01 / Selected work" title="Projects I&apos;m proud of." /><p>A few things I&apos;ve built while learning, experimenting, and solving real problems.</p></div><div className="project-list">{PROJECTS.map((project) => <article className="project-card" key={project.slug}><div className="project-info"><span className="project-number">{project.number}</span><h2>{project.title}</h2><p>{project.description}</p><div className="tag-list">{project.technologies.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>View project <span>↗</span></Link></div><ProjectPreview variant={project.variant} /></article>)}</div></section></main>;
}

export function ContactPage() {
  return <main><section className="contact-section contact-page"><div className="section-shell contact-inner"><SectionHeading eyebrow="01 / Contact" title="Let&apos;s build something useful." /><p>I&apos;m open to conversations about interesting projects, collaborations, and opportunities.</p><div className="contact-links"><a href={`mailto:${SOCIAL_LINKS.email}`}>Email <span>↗</span></a><a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer">Kaggle <span>↗</span></a><a href={SOCIAL_LINKS.cv} target="_blank" rel="noreferrer">CV <span>↗</span></a></div></div></section></main>;
}
