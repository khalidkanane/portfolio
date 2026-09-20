export default function Home() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 items-start">
        {/* Name */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            Hey, I'm <span className="text-blue-600 dark:text-blue-400"> Khalid kanane</span>
          </h1>
        </div>

        {/* Introduction */}
        <div className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
          <p>
            I'm a <span className="font-semibold text-slate-900 dark:text-white">Full-Stack Developer</span> passionate about building web applications that solve real problems.
          </p>
          <p className="mt-4">
            With experience in modern web technologies, I create performant and scalable solutions using React, Node.js, TypeScript, and more.
          </p>
        </div>

        {/* Call to Action (Placeholder) */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            View My Projects
          </a>
          <a
            href="/"
            className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
