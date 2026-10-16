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
    <header className="sticky top-0 z-20 border-b border-[#d9e7f5] bg-white/90 backdrop-blur-[10px]">
      <nav className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-7 px-[clamp(24px,5vw,72px)]">
        <Link
          href="/"
          className="mr-auto inline-flex min-w-[190px] items-center gap-2.5 text-[0.88rem] font-bold tracking-[-0.06em] text-[#10213d]"
        >
          <img
            src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png"
            alt=""
            className="h-[2.65rem] w-[2.65rem] rounded-full border-2 border-[#1677e8] object-cover"
          />
          <span className="grid gap-0.5">
            Khalid Kanane <b className="text-[0.48rem] tracking-[0.2em] text-[#1677e8]">PORTFOLIO</b>
          </span>
        </Link>

        <ul className="flex items-center gap-2 rounded-full border border-[#d9e7f5] bg-[#eef5fc] p-1 max-[760px]:order-3 max-[760px]:w-full max-[760px]:justify-start max-[760px]:overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs text-[#5b718e] transition hover:bg-[#1677e8] hover:text-white"
              >
                <item.icon aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="inline-flex items-center gap-1.5 rounded-full bg-[#1677e8] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          href="/contact"
        >
          <FiFileText aria-hidden="true" /> Hire me <FiArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
