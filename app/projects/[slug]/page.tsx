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
    <main>
      <section className="mx-auto max-w-[1440px] px-[clamp(24px,5vw,72px)] py-20 lg:py-32">
        <Link className="text-sm font-semibold text-[#1677e8]" href="/projects">← Back to projects</Link>
        <p className="mt-10 mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">{project.number} / Case study</p>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold tracking-[-0.08em] text-[#10213d] md:text-7xl">{project.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b718e]">{project.description}</p>
          </div>
          <div className="min-h-[280px] rounded-2xl bg-gradient-to-br from-[#dceeff] to-[#8ac0f0] p-5" aria-hidden="true">
            <div className="flex gap-1"><i className="h-2 w-2 rounded-full bg-white/70" /><i className="h-2 w-2 rounded-full bg-white/70" /><i className="h-2 w-2 rounded-full bg-white/70" /></div>
            <div className="mx-auto mt-6 h-52 w-4/5 rounded-lg bg-[#10213dcc] p-6"><div className="h-3 w-2/5 bg-[#35c7ff]" /><div className="mt-6 grid grid-cols-3 gap-3">{[1, 2, 3, 4, 5, 6].map((item) => <i className="h-14 rounded bg-white/40" key={item} />)}</div></div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 border-t border-[#d9e7f5] px-[clamp(24px,5vw,72px)] py-20 lg:grid-cols-[0.7fr_1.3fr] lg:py-32">
        <div className="grid h-fit gap-5 sm:grid-cols-3 lg:grid-cols-1">
          <div><span className="block text-xs uppercase tracking-widest text-[#5b718e]">Year</span><strong className="text-[#10213d]">{project.year}</strong></div>
          <div><span className="block text-xs uppercase tracking-widest text-[#5b718e]">Role</span><strong className="text-[#10213d]">{project.role}</strong></div>
          <div><span className="block text-xs uppercase tracking-widest text-[#5b718e]">Stack</span><strong className="mt-2 flex flex-wrap gap-2">{project.technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}</strong></div>
        </div>
        <div>
          <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">About the project</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#10213d]">Useful software, thoughtfully made.</h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#5b718e]">{project.overview}</p>
          <ul className="mt-6 grid gap-3 pl-5 text-[#5b718e]">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && <a className="rounded-full bg-[#1677e8] px-5 py-3 text-sm font-bold text-white" href={project.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a>}
            {project.githubUrl && <a className="rounded-full border border-[#c9def2] px-5 py-3 text-sm font-bold text-[#1677e8]" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
          </div>
        </div>
      </section>
    </main>
  );
}
