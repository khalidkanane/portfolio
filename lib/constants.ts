/**
 * Application constants
 * These are values that don't change and are used throughout the app
 */

// Site metadata
export const SITE_NAME = "Khalid Kanane Portfolio";
export const SITE_DESCRIPTION =
  "Portfolio of Khalid Kanane, a Full Stack Developer and AI enthusiast building intelligent and scalable applications.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Author information
export const AUTHOR_NAME = "Khalid Kanane";
export const AUTHOR_TITLE = "Full-Stack Developer";
export const AUTHOR_BIO =
  "Full Stack Developer and AI enthusiast, Computer Engineering student, and builder interested in AI, Data Science, Machine Learning, and scalable web applications.";

// Social links (will be used in footer and contact sections)
export const SOCIAL_LINKS = {
  github: "https://github.com/khalidkanane",
  linkedin: "https://www.linkedin.com/in/khalid-kanane-4578bb246/",
  kaggle: "https://www.kaggle.com/khalidkanane",
  email: "khalidkanane1@gmail.com",
};

// Navigation items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
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
