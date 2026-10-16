import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">{eyebrow}</p>
      <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.07em] text-[#10213d] md:text-6xl">{title}</h2>
    </div>
  );
}

const timeline = [
  ["2024 — Present", "Full-Stack Developer", "Building portfolio projects, web applications, and product ideas using Next.js, TypeScript, Laravel, and modern deployment workflows."],
  ["2023 — 2024", "Computer Engineering Student & Project Builder", "Worked on software engineering, AI/data-driven projects, and application development while strengthening backend, frontend, and problem-solving skills."],
  ["2022 — 2023", "Frontend & Web App Exploration", "Explored modern JavaScript frameworks, responsive design, API integration, and database-backed application development."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-[clamp(24px,5vw,72px)] py-20 md:grid-cols-2 md:gap-20 lg:py-32">
        <SectionHeading eyebrow="01 / About me" title="A developer building toward AI." />
        <div className="max-w-xl text-base leading-7 text-[#5b718e]">
          <p>I&apos;m Khalid Kanane, a Full Stack Developer and AI enthusiast focused on building modern, useful, and scalable digital products.</p>
          <p className="mt-5">My work blends frontend engineering, backend architecture, and machine learning ideas to create intelligent applications that solve real problems. I enjoy working with Next.js, TypeScript, Laravel, Java, Python, and AI-powered workflows.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[#1677e8]">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={SOCIAL_LINKS.cv} target="_blank" rel="noreferrer">CV ↗</a>
          </div>
          <Link className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.08em] text-[#1677e8]" href="/contact">Let&apos;s work together ↗</Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-t border-[#d9e7f5] px-[clamp(24px,5vw,72px)] py-20 lg:py-32">
        <SectionHeading eyebrow="02 / Experience" title="Where I&apos;ve been learning and building." />
        <div className="mt-12 max-w-4xl border-t border-[#d9e7f5]">
          {timeline.map(([period, title, description]) => (
            <article className="grid gap-5 border-b border-[#d9e7f5] py-7 md:grid-cols-[130px_1fr] md:gap-11" key={period}>
              <span className="text-xs font-bold text-[#1677e8]">{period}</span>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-[#10213d]">{title}</h3>
                <p className="m-0 text-sm leading-6 text-[#5b718e]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
