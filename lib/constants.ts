/**
 * Application constants
 * These are values that don't change and are used throughout the app
 */

// Site metadata
export const SITE_NAME = "Khalid Kanane Portfolio";
export const SITE_DESCRIPTION =
  "Full-Stack Developer portfolio built with Next.js, TypeScript, and Tailwind CSS";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Author information
export const AUTHOR_NAME = "Khalid Kanane";
export const AUTHOR_TITLE = "Full-Stack Developer";
export const AUTHOR_BIO =
  "A full-stack developer passionate about building modern, scalable, and user-friendly web applications.";

// Social links (will be used in footer and contact sections)
export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "your.email@example.com",
};

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Skills categories
export const SKILL_CATEGORIES = ["Frontend", "Backend", "Tools", "Other"] as const;

// Proficiency levels
export const PROFICIENCY_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
] as const;

// Page titles (for meta tags and page headers)
export const PAGE_TITLES = {
  home: "Home",
  projects: "Projects",
  about: "About Me",
  contact: "Get in Touch",
} as const;
