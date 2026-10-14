import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/projects";
import { SOCIAL_LINKS } from "@/lib/constants";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectPreview({ variant }: { variant: string }) {
  return (
    <div className={`project-preview project-preview-${variant}`} aria-hidden="true">
      <div className="preview-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-content">
        {variant === "library" && (
          <>
            <div className="preview-sidebar" />
            <div className="book-row">
              <i />
              <i />
              <i />
            </div>
            <div className="book-row short">
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {variant === "food" && (
          <>
            <div className="food-title" />
            <div className="food-grid">
              <i />
              <i />
              <i />
              <i />
            </div>
          </>
        )}
        {variant === "ml" && (
          <>
            <div className="chart chart-large" />
            <div className="chart-row">
              <div className="chart" />
              <div className="chart" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="section-shell page-hero projects-section">
        <div className="projects-intro">
          <SectionHeading eyebrow="01 / Selected work" title="Projects I&apos;m proud of." />
          <p>
            A few things I&apos;ve built while learning, experimenting, and solving real problems.
          </p>
        </div>
        <div className="project-list">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-info">
                <span className="project-number">{project.number}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link className="text-link" href={`/projects/${project.slug}`}>
                  View project <span>↗</span>
                </Link>
              </div>
              <ProjectPreview variant={project.variant} />
            </article>
          ))}
        </div>

        <section className="projects-contributions" aria-labelledby="contributions-title">
          <div className="projects-contributions-heading">
            <div>
              <p className="eyebrow">02 / Open source activity</p>
              <h2 id="contributions-title">Building in public.</h2>
              <p>Explore the code, experiments, and consistent progress behind my projects.</p>
            </div>
            <a
              className="text-link"
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub profile <span>↗</span>
            </a>
          </div>

          <a
            className="projects-contributions-card"
            href={`${SOCIAL_LINKS.github}?tab=overview`}
            target="_blank"
            rel="noreferrer"
            aria-label="View Khalid Kanane's GitHub contribution activity"
          >
            <div className="projects-contributions-meta">
              <span>GitHub contributions</span>
              <span>@khalidkanane</span>
            </div>
            <div className="projects-contributions-chart">
              <img
                src="https://ghchart.rshah.org/1769e0/khalidkanane"
                alt="Khalid Kanane's GitHub contribution activity over the last year"
                loading="lazy"
              />
            </div>
            <div className="projects-contributions-scale">
              <span>Less</span>
              <span className="contribution-scale" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>More</span>
            </div>
          </a>
        </section>
      </section>
    </main>
  );
}
