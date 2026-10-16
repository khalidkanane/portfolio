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
    <div>
      <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">{eyebrow}</p>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-[#10213d] md:text-6xl">{title}</h2>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-[clamp(24px,5vw,72px)] py-20 lg:py-32">
        <SectionHeading
          eyebrow="01 / Competencies"
          title="What I can build with my skills."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;

            return (
              <motion.article
                className="min-h-[300px] rounded-3xl border border-[#d9e7f5] bg-gradient-to-br from-white to-[#f5faff] p-6 shadow-[0_16px_38px_rgba(48,109,171,0.08)] transition hover:-translate-y-2 hover:border-[#99c8ed] hover:shadow-[0_24px_50px_rgba(22,119,232,0.13)]"
                key={competency.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#c6e1f8] bg-[#e8f3ff] text-[#1677e8]"><Icon /></span>
                  <span className="text-xs font-extrabold tracking-[0.14em] text-[#9ab2ca]">0{index + 1}</span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.05em] text-[#10213d]">{competency.title}</h3>
                <p className="max-w-xl text-sm leading-7 text-[#5b718e]">{competency.description}</p>
                <div className="mt-7 flex flex-wrap gap-2" aria-label={`${competency.title} skills`}>
                  {competency.skills.map(([name, Icon]) => (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#d4e5f3] bg-white px-2 py-1.5 text-[#476782]" key={name} title={name}>
                      <b className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#e8f3ff] text-[#1677e8]"><Icon /></b>
                      <small className="text-[0.65rem] font-bold">{name}</small>
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-t border-[#d9e7f5] bg-gradient-to-b from-[#ebf6ff]/65 to-transparent px-[clamp(24px,5vw,72px)] py-20 lg:py-32" aria-labelledby="academic-story-title">
        <SectionHeading
          eyebrow="02 / Academic journey"
          title="Learning through curiosity, practice, and real projects."
        />
        <div className="mt-12 ml-4 grid max-w-4xl gap-6 border-l border-[#c9dff3]">
          {academicStory.map((item, index) => (
            <motion.article
              className="relative pl-9"
              key={item.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="absolute -left-5 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#b8d9f4] bg-[#e8f3ff] text-xs font-extrabold text-[#1677e8]" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="rounded-2xl border border-[#d9e7f5] bg-white/90 p-6 shadow-[0_16px_36px_rgba(48,109,171,0.07)]">
                <span className="text-xs font-bold text-[#1677e8]">{item.period}</span>
                <h3 className="mt-2 text-2xl font-semibold text-[#10213d]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5b718e]">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-[#1677e8]"><FiStar /> {item.focus}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
