import Link from "next/link";

const technologies = ["Next.js", "TypeScript", "Laravel", "PostgreSQL"];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:px-12">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
            <span className="h-px w-8 bg-blue-600 dark:bg-blue-400" />
            Full-Stack Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-7xl dark:text-white">
            Khalid Kanane
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            I build reliable, user-focused web applications from the interface
            to the database.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-md bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View my projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-blue-100 dark:border-blue-950" />
          <div className="relative">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-slate-800">
              <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                toolkit.ts
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Available
              </span>
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Technologies I work with
            </p>
            <ul className="mt-5 divide-y divide-slate-200 dark:divide-slate-800" aria-label="Technologies">
              {technologies.map((technology, index) => (
                <li
                  key={technology}
                  className="flex items-center justify-between py-4 text-lg font-medium text-slate-800 dark:text-slate-100"
                >
                  <span>{technology}</span>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
