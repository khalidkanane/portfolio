const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Laravel", "Node.js", "PHP", "REST APIs", "MySQL", "PostgreSQL"],
  "AI & Data": ["Python", "Machine Learning", "Data Science", "OpenCV", "Gemini API", "AI Agents"],
  Tools: ["Git", "GitHub", "GitHub Actions", "Firebase", "Vercel", "Figma", "Linux"],
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <main>
      <section className="section-shell page-hero skills-section">
        <SectionHeading eyebrow="01 / Skills" title="The tools in my toolbox." />
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <h2>{category}</h2>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
