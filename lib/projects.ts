import type { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "library-platform",
    number: "01",
    title: "Library Platform",
    description: "A focused reading platform for discovering, borrowing, and managing books without the clutter.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    variant: "library",
    year: "2025",
    role: "Full-stack development",
    overview: "Library Platform gives readers a calm, searchable place to find their next book and keep track of what they have borrowed.",
    highlights: ["Search and filter books by genre, author, and availability", "Borrowing flow with clear due-date states", "Responsive interface designed for focused discovery"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "foodflow",
    number: "02",
    title: "FoodFlow",
    description: "A modern ordering experience that helps local restaurants turn hungry visitors into regulars.",
    technologies: ["Laravel", "React", "MySQL"],
    variant: "food",
    year: "2024",
    role: "Frontend and API integration",
    overview: "FoodFlow connects local restaurants with hungry customers through a fast, friendly ordering journey.",
    highlights: ["Menu browsing with useful dietary and category filters", "Persistent cart and streamlined checkout states", "Restaurant-first content structure for easy updates"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ml-project",
    number: "03",
    title: "ML Project",
    description: "An approachable machine learning workspace for exploring datasets and understanding predictions.",
    technologies: ["Python", "Jupyter", "Data"],
    variant: "ml",
    year: "2024",
    role: "Research and data visualization",
    overview: "ML Project makes experimentation easier to understand by pairing model outputs with visual explanations.",
    highlights: ["Dataset inspection and preparation workflow", "Readable charts for comparing model performance", "Notebook-based experiments with documented assumptions"],
    githubUrl: "https://github.com",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}