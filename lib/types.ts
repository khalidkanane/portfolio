/**
 * TypeScript types and interfaces used across the application
 * This file centralizes all type definitions for easy maintenance
 */

// Project type for portfolio projects
export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  variant: "library" | "food" | "ml";
  year: string;
  role: string;
  overview: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Skill type for user skills
export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

// Contact form submission type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
