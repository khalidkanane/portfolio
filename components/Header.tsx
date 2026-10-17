"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiAtSign,
  FiBriefcase,
  FiCode,
  FiFileText,
  FiHome,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/", icon: FiHome },
  { label: "About", href: "/about", icon: FiUser },
  { label: "Skills", href: "/skills", icon: FiCode },
  { label: "Work", href: "/projects", icon: FiBriefcase },
  { label: "Contact", href: "/contact", icon: FiAtSign },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-[#5b718e] transition hover:bg-[#1677e8] hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e7f5] bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 backdrop-blur-md">
      <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-2.5"
        >
          <img
            src="/Firefly_Gemini%20Flash_A%20professional%20corporate%20headshot%20of%20a%20confident%20business%20executive,%20wearing%20a%20charco%20625101.png"
            alt="Khalid Kanane"
            className="h-10 w-10 shrink-0 rounded-full border-2 border-[#1677e8] object-cover sm:h-11 sm:w-11"
          />

          <span className="min-w-0">
            <span className="block whitespace-nowrap text-sm font-bold tracking-tight text-[#10213d] sm:text-base">
              Khalid Kanane
            </span>
            <span className="block text-[9px] font-bold tracking-[0.2em] text-[#1677e8]">
              PORTFOLIO
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 rounded-full border border-[#d9e7f5] bg-blue-50  p-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-xs text-[#000000] transition hover:bg-[#1677e8] hover:text-white xl:px-4"
              >
                <item.icon aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop contact button */}
        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-[#1677e8] px-4 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex lg:px-5"
        >
          <FiFileText aria-hidden="true" />
          Hire me
          <FiArrowUpRight aria-hidden="true" />
        </Link>

        {/* Mobile/tablet menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d9e7f5] text-[#10213d] transition hover:bg-[#eef5fc] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* Mobile/tablet dropdown */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#d9e7f5] bg-white px-4 pb-5 pt-3 shadow-lg sm:px-6 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  <item.icon size={17} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-3 max-w-7xl">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1677e8] px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              <FiFileText aria-hidden="true" />
              Hire me
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}