import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="section-shell nav-inner">
        <Link
          href="/"
          className="brand"
        >
          Khalid Kanane <span>●</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="hire-link" href="/contact">Hire me <span>↗</span></Link>
      </nav>
    </header>
  );
}
