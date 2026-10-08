import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project ? `${project.title} | Khalid Kanane` : "Project not found | Khalid Kanane",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail">
      <section className="section-shell project-detail-hero">
        <Link className="back-link" href="/projects">← Back to projects</Link>
        <p className="eyebrow">{project.number} / Case study</p>
        <div className="project-detail-heading">
          <div>
            <h1>{project.title}</h1>
            <p className="project-detail-lede">{project.description}</p>
          </div>
          <div className={`project-detail-preview project-preview-${project.variant}`} aria-hidden="true">
            <div className="preview-topbar"><span /><span /><span /></div>
            <div className="preview-content"><div className="preview-sidebar" /><div className="book-row"><i /><i /><i /></div><div className="book-row short"><i /><i /><i /></div></div>
          </div>
        </div>
      </section>

      <section className="section-shell project-detail-content">
        <div className="project-meta">
          <div><span>Year</span><strong>{project.year}</strong></div>
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Stack</span><strong className="project-tech-list">{project.technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}</strong></div>
        </div>
        <div className="project-detail-copy">
          <p className="eyebrow">About the project</p>
          <h2>Useful software, thoughtfully made.</h2>
          <p>{project.overview}</p>
          <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          <div className="detail-links">
            {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a>}
            {project.githubUrl && <a className="button button-quiet" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
          </div>
        </div>
      </section>
    </main>
  );
}
