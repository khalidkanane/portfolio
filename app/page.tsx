"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { SOCIAL_LINKS } from "@/lib/constants";

const stats = [
  { value: "12", label: "Years of experience" },
  { value: "26", label: "Projects completed" },
  { value: "8", label: "Technologies mastered" },
  { value: "500", label: "Code commits" },
];

const skillHighlights = [
  { name: "Tailwind", icon: "TW" },
  { name: "MongoDB", icon: "MD" },
  { name: "MySQL", icon: "MS" },
  { name: "PostgreSQL", icon: "PG" },
  { name: "Git", icon: "GT" },
  { name: "AWS", icon: "AWS" },
];

const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Laravel", "Node.js", "PHP", "REST APIs"] },
  { title: "AI & Data", items: ["Python", "Machine Learning", "OpenCV", "Gemini API"] },
  { title: "Tools", items: ["Git", "GitHub", "Firebase", "PostgreSQL"] },
];

export default function Home() {
  return (
    <main className="home-page">
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />
      <div className="bg-orb orb-3" aria-hidden="true" />

      <section className="hero-shell section-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Software Developer</p>
          <h1>
            Hello I&apos;m
            <span>Khalid Kanane</span>
          </h1>
          <p className="hero-lede">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>

          <div className="hero-actions">
            <motion.a
              className="hero-button primary"
              href={SOCIAL_LINKS.cv}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV <span>↗</span>
            </motion.a>
            <motion.div className="social-buttons" aria-label="Social links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <motion.a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                G
              </motion.a>
              <motion.a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                in
              </motion.a>
              <motion.a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer" aria-label="Kaggle" whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                K
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          aria-label="Profile card illustration"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <div className="profile-ring">
            <div className="profile-avatar">
              <img src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png" alt="Khalid Kanane" />
            </div>
          </div>
        </motion.div>
      </section>

      <div className="stats-row section-shell" aria-label="Key metrics">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-item"
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <section className="home-section section-shell about-home" aria-label="About section">
        <div className="about-photo-wrap">
          <div className="about-photo">
            <img
              src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png"
              alt="Khalid Kanane"
            />
          </div>
        </div>

        <div className="about-copy-home">
          <p className="eyebrow small">About me</p>
          <h2>I turn ideas into modern digital products.</h2>
          <p>
            I&apos;m Khalid Kanane, a full-stack developer and AI enthusiast building practical,
            elegant software for the web and beyond.
          </p>
          <p>
            I enjoy combining frontend engineering, backend architecture, and AI-driven ideas to
            create products that are useful, scalable, and meaningful.
          </p>

          <div className="about-links">
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
        </div>
      </section>

      <section className="home-section section-shell" aria-label="Skills section">
        <div className="section-header">
          <p className="eyebrow small">My skills</p>
          <h2>Tools and technologies I use.</h2>
        </div>

        <div className="tech-banner" aria-label="Technology stack list">
          {skillHighlights.map((skill) => (
            <div className="tech-pill" key={skill.name}>
              <span className="tech-icon">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section section-shell" aria-label="Featured projects section">
        <div className="section-header with-link">
          <div>
            <p className="eyebrow small">Featured work</p>
            <h2>Selected projects and experiments.</h2>
          </div>
          <Link href="/projects" className="text-link-home">View all work <span>↗</span></Link>
        </div>

        <div className="project-showcase">
          {PROJECTS.map((project) => (
            <motion.article
              className="project-home-card"
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`} className="text-link-home">
                Learn more <span>↗</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
