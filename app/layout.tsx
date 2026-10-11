import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Khalid Kanane | Full-Stack Developer",
  description:
    "Khalid Kanane is a full-stack developer building modern web applications with Next.js, TypeScript, Laravel, and PostgreSQL.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="site-footer section-shell">
          <span>© 2026 Khalid Kanane</span>
          <span className="p-0.5">Designed &amp; built with care </span>
          <a href="#top" > Back to top ↑</a>
        </footer>
      </body>
    </html>
  );
}
