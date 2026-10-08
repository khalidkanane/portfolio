import type { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "library-management-system",
    number: "01",
    title: "AI Library Management System",
    description: "A digital library system for managing books, users, borrowing operations, and AI-powered reading features.",
    technologies: ["React", "Laravel", "Firebase", "Gemini API"],
    variant: "library",
    year: "2024",
    role: "Full-stack development",
    overview: "This project combines a React frontend with a Laravel REST API, Firebase services, and Gemini AI features to make library management more useful for both readers and administrators.",
    highlights: ["Book, user, borrow, return, and favorites management", "Search and filter books with responsive UI", "Gemini-powered summaries, recommendations, and assistant responses"],
    githubUrl: "https://github.com/khalidkanane/library-management-system",
    featured: true,
  },
  {
    slug: "food-management-system",
    number: "02",
    title: "Food Management System",
    description: "A JavaFX desktop management application for organizing food-service operations and workflows.",
    technologies: ["Java", "JavaFX"],
    variant: "food",
    year: "2024",
    role: "Application development",
    overview: "A desktop application focused on practical food-management workflows, built as part of Khalid's Java and JavaFX work.",
    highlights: ["Desktop-first JavaFX interface", "Structured management workflows", "Part of a broader Java application portfolio"],
    githubUrl: "https://github.com/khalidkanane/khalidkanane",
    featured: true,
  },
  {
    slug: "image-segmentation",
    number: "03",
    title: "Image Segmentation",
    description: "A computer vision project exploring image segmentation and practical machine learning workflows.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
    variant: "ml",
    year: "2024",
    role: "Computer vision development",
    overview: "This project reflects Khalid's interest in AI, Data Science, and Machine Learning, with a focus on using computer vision techniques to understand image data.",
    highlights: ["Computer vision experimentation", "Image-focused data processing", "Practical exploration of machine learning concepts"],
    githubUrl: "https://github.com/khalidkanane",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}