import { SOCIAL_LINKS } from "@/lib/constants";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="contact-section contact-page">
        <div className="section-shell contact-inner">
          <SectionHeading eyebrow="01 / Contact" title="Let&apos;s build something useful." />
          <p>
            I&apos;m open to conversations about interesting projects, collaborations, and
            opportunities.
          </p>
          <div className="contact-links">
            <a href={`mailto:${SOCIAL_LINKS.email}`}>
              Email <span>↗</span>
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
            <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer">
              Kaggle <span>↗</span>
            </a>
            <a href={SOCIAL_LINKS.cv} target="_blank" rel="noreferrer">
              CV <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
