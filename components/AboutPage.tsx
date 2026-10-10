import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="section-shell page-hero split-section">
        <SectionHeading eyebrow="01 / About me" title="A developer building toward AI." />
        <div className="about-copy">
          <p>
            I&apos;m Khalid Kanane, a Full Stack Developer and AI enthusiast focused on building
            modern, useful, and scalable digital products.
          </p>
          <p>
            My work blends frontend engineering, backend architecture, and machine learning ideas to
            create intelligent applications that solve real problems. I enjoy working with Next.js,
            TypeScript, Laravel, Java, Python, and AI-powered workflows.
          </p>
          <div className="contact-links" style={{ marginTop: "24px" }}>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
            <a href={SOCIAL_LINKS.cv} target="_blank" rel="noreferrer">
              CV <span>↗</span>
            </a>
          </div>
          <Link className="text-link" href="/contact">
            Let&apos;s work together <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="section-shell timeline-section">
        <SectionHeading eyebrow="02 / Experience" title="Where I&apos;ve been learning and building." />
        <div className="timeline">
          <div className="timeline-item">
            <span>2024 — Present</span>
            <div>
              <h3>Full-Stack Developer</h3>
              <p>
                Building portfolio projects, web applications, and product ideas using Next.js,
                TypeScript, Laravel, and modern deployment workflows.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>2023 — 2024</span>
            <div>
              <h3>Computer Engineering Student &amp; Project Builder</h3>
              <p>
                Worked on software engineering, AI/data-driven projects, and application development
                while strengthening backend, frontend, and problem-solving skills.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>2022 — 2023</span>
            <div>
              <h3>Frontend &amp; Web App Exploration</h3>
              <p>
                Explored modern JavaScript frameworks, responsive design, API integration, and
                database-backed application development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
