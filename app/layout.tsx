import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Header from "@/components/Header";
import { AUTHOR_LOCATION, SOCIAL_LINKS } from "@/lib/constants";
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
        <footer className="site-footer">
          <div className="section-shell footer-grid">
            <div className="footer-intro">
              <p className="eyebrow">Let&apos;s connect</p>
              <h2>Have an idea? Let&apos;s make it real.</h2>
              <a className="footer-email" href={`mailto:${SOCIAL_LINKS.email}`}>
                {SOCIAL_LINKS.email} <span>↗</span>
              </a>
            </div>
            <div className="footer-details">
              <div>
                <span className="footer-label">Based in</span>
                <strong>{AUTHOR_LOCATION}</strong>
              </div>
              <div>
                <span className="footer-label">Availability</span>
                <strong><i className="availability-dot" /> Open to opportunities</strong>
              </div>
              <div className="footer-socials">
                <span className="footer-label">Find me online</span>
                <div>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer">Kaggle</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2026 Khalid Kanane</span>
              <span>Designed &amp; built with care</span>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
