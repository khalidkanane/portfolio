import type { Metadata } from "next";
import { Fira_Sans, Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      className={`${firaSans.variable} ${roboto.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="site-footer section-shell">
          <span>© 2026 Khalid Kanane</span>
          <span>Designed &amp; built with care</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </body>
    </html>
  );
}
