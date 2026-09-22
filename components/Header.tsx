import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Portfolio
        </Link>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
