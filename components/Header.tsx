import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo/Home Link */}
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Portfolio
        </Link>

        {/* Navigation Links (Placeholder) */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
