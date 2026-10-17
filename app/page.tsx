"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { SOCIAL_LINKS } from "@/lib/constants";
import type { IconType } from "react-icons";
import { FiArrowUpRight, FiAtSign, FiCode, FiCpu, FiDownload } from "react-icons/fi";
import { FaAws, FaGitAlt, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa6";
import {
  SiFirebase,
  SiGithub,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpencv,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const stats = [
  { value: "12", label: "Years of experience" },
  { value: "26", label: "Projects completed" },
  { value: "8", label: "Technologies mastered" },
  { value: "500", label: "Code commits" },
];

const skillHighlights = [
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
  { name: "AWS", icon: FaAws },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [["React", FaReact], ["Next.js", SiNextdotjs], ["TypeScript", SiTypescript], ["Tailwind CSS", SiTailwindcss]] as [string, IconType][],
  },
  {
    title: "Backend",
    items: [["Laravel", SiLaravel], ["Node.js", FaNodeJs], ["PHP", FaPhp], ["REST APIs", FiCode]] as [string, IconType][],
  },
  {
    title: "AI & Data",
    items: [["Python", FaPython], ["Machine Learning", FiCpu], ["OpenCV", SiOpencv], ["Gemini API", FiCpu]] as [string, IconType][],
  },
  {
    title: "Tools",
    items: [["Git", FaGitAlt], ["GitHub", SiGithub], ["Firebase", SiFirebase], ["PostgreSQL", SiPostgresql]] as [string, IconType][],
  },
];

const academicSlides = [
  {
    period: "2023 — Present",
    title: "Computer Engineering",
    summary:
      "Building a strong foundation in software engineering, algorithms, systems design, and practical application development.",
    imageLabel: "University / campus image",
    resume: [
      "Software engineering fundamentals",
      "Systems thinking and architecture",
      "Problem solving through projects",
    ],
    badge: "Academic base",
  },
  {
    period: "Current focus",
    title: "Artificial Intelligence & Data",
    summary:
      "Exploring machine learning, computer vision, and data-driven workflows through experiments and portfolio projects.",
    imageLabel: "Lab / research space image",
    resume: [
      "Python and data workflow practice",
      "Machine learning and computer vision",
      "AI-powered product ideas",
    ],
    badge: "Research focus",
  },
  {
    period: "Alongside my studies",
    title: "Learning by Building",
    summary:
      "Turning academic concepts into real web products using modern frontend, backend, database, and deployment tools.",
    imageLabel: "Project / workspace image",
    resume: [
      "Next.js, TypeScript, and React",
      "Laravel, PostgreSQL, and APIs",
      "Shipping practical portfolio projects",
    ],
    badge: "Applied work",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % academicSlides.length);
    }, 5500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="home-page relative z-1 min-h-screen overflow-hidden">
    

<section className="relative isolate mx-auto grid min-h-[calc(100vh-76px)]  items-center gap-14 overflow-hidden bg-linear-to-br from-white via-white to-blue-50/80 px-[clamp(24px,5vw,72px)] py-20 lg:grid-cols-2 lg:gap-16">
  {/* Soft background glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-20 left-1/4 -z-10 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl"
  />

  {/* Tiny floating space shapes */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
  >
    <motion.span
      className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-blue-400/70"
      animate={{ x: [0, 18, -8, 0], y: [0, -24, 12, 0], opacity: [0.35, 0.9, 0.5, 0.35] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.span
      className="absolute left-[43%] top-[13%] h-1.5 w-1.5 rounded-full bg-sky-500/60"
      animate={{ x: [0, -15, 10, 0], y: [0, 22, -12, 0], opacity: [0.3, 0.8, 0.4, 0.3] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.span
      className="absolute right-[12%] top-[22%] h-2.5 w-2.5 rounded-full border border-blue-300/80"
      animate={{ x: [0, 12, -10, 0], y: [0, 20, -15, 0], rotate: [0, 90, 180, 360] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.span
      className="absolute bottom-[19%] left-[12%] h-3 w-3 rounded-sm border border-sky-300/70"
      animate={{ x: [0, 16, -6, 0], y: [0, -18, 8, 0], rotate: [0, 45, 90, 0] }}
      transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.span
      className="absolute bottom-[14%] right-[9%] text-lg font-light text-blue-300/70"
      animate={{ y: [0, -12, 0], opacity: [0.35, 0.8, 0.35], rotate: [0, 12, -12, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      +
    </motion.span>

    <motion.span
      className="absolute right-[40%] top-[72%] h-1 w-1 rounded-full bg-blue-400/70"
      animate={{ x: [0, -12, 14, 0], y: [0, 12, -18, 0], opacity: [0.3, 0.9, 0.4, 0.3] }}
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* Left: introduction */}
  <motion.div
    className="relative z-10 max-w-2xl"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
  >
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-blue-500" />
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
        Software Developer
      </p>
    </div>

    <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-slate-900 sm:text-6xl md:text-7xl xl:text-8xl">
      Hello, I&apos;m
      <span className="mt-2 block bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text pb-2 text-transparent">
        Khalid Kanane
      </span>
    </h1>

    <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
      I build modern web applications and thoughtful digital experiences,
      combining clean design with reliable, scalable code.
    </p>

    <div className="mt-9 flex flex-wrap items-center gap-4">
      <motion.a
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-shadow hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        href={SOCIAL_LINKS.cv}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FiDownload aria-hidden="true" />
        Download CV
        <FiArrowUpRight aria-hidden="true" />
      </motion.a>

      <div className="flex items-center gap-3" aria-label="Social links">
        <motion.a
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiCode aria-hidden="true" />
        </motion.a>

        <motion.a
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiAtSign aria-hidden="true" />
        </motion.a>

        <motion.a
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white/90 text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          href={SOCIAL_LINKS.kaggle}
          target="_blank"
          rel="noreferrer"
          aria-label="Kaggle"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUpRight aria-hidden="true" />
        </motion.a>
      </div>
    </div>

    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-blue-100/80 pt-5 text-sm text-slate-500">
      <span className="flex items-center gap-2">
        <FiCode className="text-blue-500" aria-hidden="true" />
        Full-Stack Development
      </span>
      <span className="flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-blue-400" />
        Exploring AI &amp; ML
      </span>
    </div>
  </motion.div>

  {/* Right: profile photo */}
  <motion.div
    className="relative z-10 flex items-center justify-center py-6"
    initial={{ opacity: 0, y: 24, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
  >
    {/* Decorative halo */}
    <motion.div
      aria-hidden="true"
      className="absolute h-[min(72vw,410px)] w-[min(72vw,410px)] rounded-full border border-blue-200/70"
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
    >
      <span className="absolute left-[14%] top-[14%] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-md shadow-blue-300/50" />
    </motion.div>

    <motion.div
      className="relative w-[min(78vw,390px)]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-300/40 via-sky-200/20 to-blue-500/30 blur-xl" />

      <div className="relative rotate-2 rounded-[1.75rem] border border-white/80 bg-gradient-to-br from-white via-blue-50 to-blue-100 p-3 shadow-[0_30px_80px_rgba(37,99,235,0.16)]">
        <div className="overflow-hidden rounded-[1.25rem] border border-blue-100 bg-white">
          <img
            className="aspect-[4/5] w-full object-cover object-center"
            src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png"
            alt="Portrait of Khalid Kanane"
          />
        </div>

        <div className="flex items-center justify-between gap-3 px-2 py-4">
          <div>
            <p className="font-semibold tracking-tight text-slate-900">
              Khalid Kanane
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Developer · AI enthusiast
            </p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <FiCode aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Floating tech badge */}
      <motion.div
        className="absolute -left-8 top-[22%] hidden items-center gap-2 rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-lg shadow-blue-900/5 backdrop-blur-sm sm:flex"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiCode aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold text-slate-700">
          Clean code
        </span>
      </motion.div>

      <motion.div
        className="absolute -right-5 bottom-[20%] hidden rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-lg shadow-blue-900/5 backdrop-blur-sm sm:block"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <p className="text-xs font-semibold text-blue-700">Always learning</p>
        <p className="mt-1 text-[11px] text-slate-500">Web · AI · ML</p>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


      <div
        className="mx-auto grid max-w-360 grid-cols-2 gap-8 border-t border-[#dbe8f5] px-[clamp(24px,5vw,72px)] py-12 lg:grid-cols-4 lg:py-20"
        aria-label="Key metrics"
      >
        {stats.map((stat, index) => (
          <motion.div
            className="flex min-h-20.5 items-center justify-center gap-3 lg:justify-center"
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <strong className="text-5xl font-medium leading-none tracking-[-0.08em] text-[#0b1b33]">{stat.value}</strong>
            <span className="inline-block max-w-32.5 text-sm leading-snug text-[#58708d]">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <section
        className="mx-auto grid max-w-360 gap-10 border-t border-[#dbe8f5] px-[clamp(24px,5vw,72px)] py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-32"
        aria-label="About section"
      >
        <div className="flex items-center justify-center">
          <div className="max-w-md overflow-hidden rounded-3xl border-8 border-[#e8f3ff] shadow-xl">
            <img
              src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png"
              alt="Khalid Kanane"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">About me</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#10213d] md:text-6xl">I turn ideas into modern digital products.</h2>
          <p className="mt-6 leading-7 text-[#5b718e]">
            I&apos;m Khalid Kanane, a full-stack developer and AI enthusiast building practical,
            elegant software for the web and beyond.
          </p>
          <p className="mt-5 leading-7 text-[#5b718e]">
            I enjoy combining frontend engineering, backend architecture, and AI-driven ideas to
            create products that are useful, scalable, and meaningful.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-[#1677e8]">
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

      <section
        className="mx-auto max-w-[1440px] border-t border-[#dbe8f5] px-[clamp(24px,5vw,72px)] py-20 lg:py-32"
        aria-label="Academic story section"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">Academic story</p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#10213d] md:text-6xl">My journey </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full border border-[#c9def2] bg-white px-4 py-2 text-[#1677e8]"
              onClick={() => setActiveSlide((current) => (current - 1 + academicSlides.length) % academicSlides.length)}
              aria-label="Previous academic slide"
            >
              ←
            </button>
            <button
              type="button"
              className="rounded-full border border-[#c9def2] bg-white px-4 py-2 text-[#1677e8]"
              onClick={() => setActiveSlide((current) => (current + 1) % academicSlides.length)}
              aria-label="Next academic slide"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${activeSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            {academicSlides.map((slide) => (
              <article className="grid min-w-full gap-8 rounded-3xl border border-[#d9e7f5] bg-white p-6 shadow-sm md:grid-cols-2 md:p-10" key={slide.title}>
                <div className="flex min-h-64 flex-col justify-between rounded-2xl bg-gradient-to-br from-[#dceeff] to-[#8ac0f0] p-6">
                  <span className="w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-[#1677e8]">{slide.badge}</span>
                  <div className="text-2xl font-semibold text-[#10213d]">
                    <span>{slide.imageLabel}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-[#1677e8]">{slide.period}</span>
                  <h3 className="mt-3 text-3xl font-semibold text-[#10213d]">{slide.title}</h3>
                  <p className="mt-3 leading-7 text-[#5b718e]">{slide.summary}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5b718e]">
                    {slide.resume.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-label="Academic slide indicators">
          {academicSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`h-2.5 w-2.5 rounded-full ${index === activeSlide ? "bg-[#1677e8]" : "bg-[#c9def2]"}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] border-t border-[#dbe8f5] px-[clamp(24px,5vw,72px)] py-20 lg:py-32"
        aria-label="Skills section"
      >
        <div>
          <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">My skills</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#10213d] md:text-6xl">Tools and technologies I use.</h2>
        </div>

        <div className="my-8 grid gap-4 sm:grid-cols-2 lg:mb-12 lg:grid-cols-6" aria-label="Technology stack list">
          {skillHighlights.map((skill) => {
            const Icon = skill.icon;
            return (
              <div className="flex min-h-[68px] items-center justify-center gap-2.5 rounded-full border border-[#dbe8f5] bg-white/90 px-3 py-3 text-center text-sm text-[#244464] shadow-[0_12px_30px_rgba(49,97,148,0.06)]" key={skill.name}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#c7ddf4] bg-[#e8f1fb] text-[#1769e0]"><Icon aria-hidden="true" /></span>
                {skill.name}
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div className="rounded-[20px] border border-[#dbe8f5] bg-white/90 p-5 shadow-[0_12px_30px_rgba(49,97,148,0.06)]" key={group.title}>
              <h3 className="mb-4 text-base text-[#0b1b33]">{group.title}</h3>
              <ul className="m-0 list-none p-0">
                {group.items.map(([name, Icon]) => (
                  <li className="flex items-center gap-2 border-t border-[#e5eef8] py-2.5 text-sm text-[#58708d]" key={name}><Icon className="h-4 w-4 shrink-0 text-[#1769e0]" aria-hidden="true" /> {name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] border-t border-[#dbe8f5] px-[clamp(24px,5vw,72px)] py-20 lg:py-32"
        aria-label="Featured projects section"
      >
        <div className="flex flex-wrap items-end justify-between gap-6 mb-3">
          <div>
            <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">Featured work</p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[#10213d] md:text-6xl ">Selected projects and experiments.</h2>
          </div>
          <Link href="/projects" className="text-xs font-bold uppercase tracking-[0.08em] text-[#1677e8]">View all work ↗</Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.article
              className="flex min-h-[260px] flex-col gap-4 rounded-[20px] border border-[#dbe8f5] bg-white/90 p-6 shadow-[0_12px_30px_rgba(49,97,148,0.06)] transition hover:-translate-y-2 hover:border-[#9fc5ef] hover:shadow-[0_20px_42px_rgba(23,105,224,0.12)]"
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[#1769e0]">{project.number}</span>
              <h3 className="m-0 text-[1.4rem] tracking-[-0.04em] text-[#0b1b33]">{project.title}</h3>
              <p className="m-0 leading-7 text-[#58708d]">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span className="rounded-full border border-[#c7ddf4] bg-[#e8f1fb] px-2.5 py-2 text-[0.64rem] uppercase tracking-[0.08em] text-[#1769e0]" key={tech}>{tech}</span>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`} className="text-xs font-bold uppercase tracking-[0.08em] text-[#1677e8]">
                Learn more ↗
              </Link>
            </motion.article>
          ))}
        </div>

      </section>
    </main>
  );
}
