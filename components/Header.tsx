import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircleUserRound,
  Code2,
  FileText,
  Home,
  AtSign,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: CircleUserRound },
  { label: "Skills", href: "/skills", icon: Code2 },
  { label: "Work", href: "/projects", icon: BriefcaseBusiness },
  { label: "Contact", href: "/contact", icon: AtSign },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="section-shell nav-inner">
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
          <FileText aria-hidden="true" /> Hire me <ArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
