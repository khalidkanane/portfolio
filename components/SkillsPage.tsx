"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiCode,
  FiStar,
  FiZap,
} from "react-icons/fi";
import {
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiFirebase,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiOpencv,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Skill = readonly [name: string, icon: IconType];

type Competency = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

const competencies: Competency[] = [
  {
    title: "Frontend Developer",
    description:
      "I create responsive, accessible interfaces with clear structure, smooth interactions, and a strong visual finish.",
    icon: FiCode,
    skills: [
      ["React", FaReact],
      ["Next.js", SiNextdotjs],
      ["TypeScript", SiTypescript],
      ["Tailwind CSS", SiTailwindcss],
      ["JavaScript", FaJs],
    ],
  },
  {
    title: "Backend Developer",
    description:
      "I design APIs, data flows, and server-side features that keep applications reliable, maintainable, and scalable.",
    icon: FiDatabase,
    skills: [
      ["Laravel", SiLaravel],
      ["Node.js", FaNodeJs],
      ["PHP", FaPhp],
      ["REST APIs", FiCloud],
      ["PostgreSQL", SiPostgresql],
      ["MySQL", SiMysql],
    ],
  },
  {
    title: "AI & Data Explorer",
    description:
      "I turn data and machine learning ideas into practical experiments, computer vision workflows, and useful product features.",
    icon: FiCpu,
    skills: [
      ["Python", FaPython],
      ["Machine Learning", FiCpu],
      ["Data Science", FiBarChart2],
      ["OpenCV", SiOpencv],
      ["Gemini API", FiZap],
      ["AI Agents", FiCpu],
    ],
  },
  {
    title: "Product Builder",
    description:
      "I connect design, development, and deployment to move an idea from an early concept to a polished working product.",
    icon: FiLayers,
    skills: [
      ["Git", FaGitAlt],
      ["GitHub", FaGithub],
      ["Firebase", SiFirebase],
      ["Vercel", SiVercel],
      ["Figma", FaFigma],
      ["Linux", FaLinux],
    ],
  },
];

const academicStory = [
  {
    period: "2023 — Present",
    title: "Computer Engineering",
    description:
      "Developing a strong foundation in software engineering, systems design, algorithms, and application development.",
    focus: "Software engineering · Systems · Problem solving",
  },
  {
    period: "Current focus",
    title: "Artificial Intelligence & Data",
    description:
      "Exploring machine learning, computer vision, data science, and AI-powered workflows through practical projects.",
    focus: "Python · Machine learning · OpenCV",
  },
  {
    period: "Alongside my studies",
    title: "Learning by building",
    description:
      "Turning academic concepts into useful web applications with modern frontend, backend, database, and deployment tools.",
    focus: "Next.js · TypeScript · Laravel · PostgreSQL",
  },
];

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
        <SectionHeading
          eyebrow="01 / Competencies"
          title="What I can build with my skills."
        />
        <div className="competency-grid">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;

            return (
              <motion.article
                className="competency-card"
                key={competency.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="competency-card-top">
                  <span className="competency-icon"><Icon aria-hidden="true" /></span>
                  <span className="competency-number">0{index + 1}</span>
                </div>
                <h3>{competency.title}</h3>
                <p>{competency.description}</p>
                <div className="competency-skills" aria-label={`${competency.title} skills`}>
                  {competency.skills.map(([name, Icon]) => (
                    <span className="skill-logo" key={name} title={name}>
                      <b><Icon aria-hidden="true" /></b>
                      <small>{name}</small>
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="academic-story section-shell" aria-labelledby="academic-story-title">
        <SectionHeading
          eyebrow="02 / Academic journey"
          title="Learning through curiosity, practice, and real projects."
        />
        <div className="academic-timeline">
          {academicStory.map((item, index) => (
            <motion.article
              className="academic-step"
              key={item.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="academic-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="academic-step-content">
                <span className="academic-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="academic-focus"><FiStar aria-hidden="true" /> {item.focus}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
