import Link from "next/link";
import {
  FiArrowUpRight,
  FiAtSign,
  FiBriefcase,
  FiCode,
  FiFileText,
  FiHome,
  FiUser,
} from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "About", href: "/about", icon: FiUser },
  { label: "Skills", href: "/skills", icon: FiCode },
  { label: "Work", href: "/projects", icon: FiBriefcase },
  { label: "Contact", href: "/contact", icon: FiAtSign },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="section-shell nav-inner bg-color: var(--color-bg-1) border-b border-color: var(--color-border-1) ">
        <Link
          href="/"
          className="brand"
        >
          <img
            src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png"
            alt=""
          />
          <span className="brand-copy">Khalid Kanane <b>PORTFOLIO</b></span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <item.icon aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="hire-link" href="/contact">
          <FiFileText aria-hidden="true" /> Hire me <FiArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
