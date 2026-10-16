import type { Metadata } from "next";
import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import { AUTHOR_LOCATION, SOCIAL_LINKS } from "@/lib/constants";
import { FaGithub, FaKaggle, FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import "./global.css";

export const metadata: Metadata = {
  title: "Khalid Kanane | Full-Stack Developer",
  description:
    "Khalid Kanane is a full-stack developer building modern web applications with Next.js, TypeScript, Laravel, and PostgreSQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-theme="light"
    >
      <body id="top" className="min-h-full flex flex-col">
        <AnimatedBackground />
        <Header />
        <div className="relative z-10 flex-1">{children}</div>
        <footer className="relative z-10 border-t border-[#d9e7f5] bg-blue-900 text-[#b4c4db]">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-[clamp(24px,5vw,72px)] py-20 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#35c7ff]">Let&apos;s connect</p>
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">Have an idea? Let&apos;s make it real.</h2>
              <a className="mt-7 inline-flex items-center gap-2 text-[#35c7ff]" href={`mailto:${SOCIAL_LINKS.email}`}>
                {SOCIAL_LINKS.email} <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-7 sm:grid-cols-3">
              <div>
                <span className="mb-2 block text-xs uppercase tracking-[0.12em]">Based in</span>
                <strong className="flex items-center gap-2 text-white"><FiMapPin aria-hidden="true" /> {AUTHOR_LOCATION}</strong>
              </div>
              <div>
                <span className="mb-2 block text-xs uppercase tracking-[0.12em]">Availability</span>
                <strong className="flex items-center gap-2 text-white"><i className="h-2 w-2 rounded-full bg-[#35c7ff]" /> Open to opportunities</strong>
              </div>
              <div>
                <span className="mb-2 block text-xs uppercase tracking-[0.12em]">Find me online</span>
                <div className="grid gap-2">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
                  <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer"><FaKaggle aria-hidden="true" /> Kaggle</a>
                </div>
              </div>
            </div>
            <div className="col-span-full flex flex-wrap justify-between gap-3 border-t border-[#183158] pt-5 text-xs">
              <span>© 2026 Khalid Kanane</span>
              <span>Designed &amp; built with care</span>
              <a href="#top">Back to top <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
