"use client";

import { FormEvent, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight, AtSign, Clock3, Send } from "lucide-react";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const body = `Hello Khalid,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`;
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
      subject || "Portfolio project inquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main>
      <section className="contact-page">
        <div className="section-shell contact-layout">
          <div className="contact-intro">
            <SectionHeading eyebrow="01 / Contact" title="Let&apos;s build something useful." />
            <p className="contact-lede">
              Have a project idea, a collaboration in mind, or an opportunity to discuss?
              Send a message and I&apos;ll get back to you.
            </p>

            <div className="contact-info-list">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="contact-info-item">
                <span className="contact-info-icon"><AtSign aria-hidden="true" /></span>
                <span><small>Email</small><strong>{SOCIAL_LINKS.email}</strong></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="contact-info-item">
                <span className="contact-info-icon"><Clock3 aria-hidden="true" /></span>
                <span><small>Availability</small><strong>Open to opportunities</strong></span>
              </div>
            </div>

            <div className="contact-links">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noreferrer">Kaggle <span>↗</span></a>
              <a href={SOCIAL_LINKS.cv} target="_blank" rel="noreferrer">CV <span>↗</span></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <span>Start a conversation</span>
              <p>Your email app will open with the message ready to send.</p>
            </div>
            <div className="contact-form-grid">
              <label>
                Your name
                <input name="name" type="text" placeholder="John Doe" required />
              </label>
              <label>
                Email address
                <input name="email" type="email" placeholder="john@example.com" required />
              </label>
            </div>
            <label>
              Subject
              <input name="subject" type="text" placeholder="Project collaboration" />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me a little about your idea..." rows={6} required />
            </label>
            <button className="contact-submit" type="submit">
              <Send aria-hidden="true" /> {sent ? "Opening your email..." : "Prepare message"}
              <ArrowUpRight aria-hidden="true" />
            </button>
            <p className="contact-form-note">
              No account or form service required. Your message stays in your email client until you send it.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
