"use client";

import { FormEvent, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { FiArrowUpRight, FiAtSign, FiClock, FiSend } from "react-icons/fi";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div><p className="mb-5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#1677e8]">{eyebrow}</p><h2 className="text-4xl font-semibold tracking-[-0.07em] text-[#10213d] md:text-6xl">{title}</h2></div>;
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
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject || "Portfolio project inquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const links = [["GitHub", SOCIAL_LINKS.github, "Explore my code and open-source projects"], ["LinkedIn", SOCIAL_LINKS.linkedin, "Connect with me professionally"], ["Kaggle", SOCIAL_LINKS.kaggle, "See my data and machine-learning work"], ["CV", SOCIAL_LINKS.cv, "Download my experience and skills"]];

  return (
    <main>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-[clamp(24px,5vw,72px)] py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32">
        <div>
          <SectionHeading eyebrow="01 / Contact" title="Let&apos;s build something useful." />
          <p className="mt-7 max-w-lg leading-7 text-[#5b718e]">Have a project idea, a collaboration in mind, or an opportunity to discuss? Send a message and I&apos;ll get back to you.</p>
          <div className="mt-10 grid gap-3">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 rounded-2xl border border-[#d9e7f5] bg-white p-4 text-[#10213d] shadow-sm">
              <span className="rounded-xl bg-[#e8f3ff] p-3 text-[#1677e8]"><FiAtSign /></span><span className="flex-1"><small className="block text-xs text-[#5b718e]">Email</small><strong>{SOCIAL_LINKS.email}</strong></span><FiArrowUpRight />
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-[#d9e7f5] bg-white p-4 text-[#10213d] shadow-sm">
              <span className="rounded-xl bg-[#e8f3ff] p-3 text-[#1677e8]"><FiClock /></span><span><small className="block text-xs text-[#5b718e]">Availability</small><strong>Open to opportunities</strong></span>
            </div>
          </div>
          <div className="mt-8 grid gap-4">
            {links.map(([label, href, description]) => <a className="border-b border-[#d9e7f5] pb-3 text-[#1677e8]" href={href} target="_blank" rel="noreferrer" key={label}><span className="font-semibold">{label} ↗</span><small className="ml-3 text-[#5b718e]">{description}</small></a>)}
          </div>
        </div>
        <form className="grid gap-5 rounded-3xl border border-[#d9e7f5] bg-white p-6 shadow-[0_24px_60px_rgba(48,109,171,0.1)] md:p-10" onSubmit={handleSubmit}>
          <div><span className="text-2xl text-[#10213d]">Start a conversation</span><p className="mt-2 text-sm text-[#5b718e]">Your email app will open with the message ready to send.</p></div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-xs font-bold tracking-wide text-[#365779]">Your name<input className="rounded-xl border border-[#d5e5f3] bg-[#f8fbff] p-3 text-sm font-normal outline-none focus:border-[#1677e8] focus:ring-4 focus:ring-[#1677e8]/10" name="name" type="text" placeholder="John Doe" required /></label>
            <label className="grid gap-2 text-xs font-bold tracking-wide text-[#365779]">Email address<input className="rounded-xl border border-[#d5e5f3] bg-[#f8fbff] p-3 text-sm font-normal outline-none focus:border-[#1677e8] focus:ring-4 focus:ring-[#1677e8]/10" name="email" type="email" placeholder="john@example.com" required /></label>
          </div>
          <label className="grid gap-2 text-xs font-bold tracking-wide text-[#365779]">Subject<input className="rounded-xl border border-[#d5e5f3] bg-[#f8fbff] p-3 text-sm font-normal outline-none focus:border-[#1677e8] focus:ring-4 focus:ring-[#1677e8]/10" name="subject" type="text" placeholder="Project collaboration" /></label>
          <label className="grid gap-2 text-xs font-bold tracking-wide text-[#365779]">Message<textarea className="resize-y rounded-xl border border-[#d5e5f3] bg-[#f8fbff] p-3 text-sm font-normal outline-none focus:border-[#1677e8] focus:ring-4 focus:ring-[#1677e8]/10" name="message" placeholder="Tell me a little about your idea..." rows={6} required /></label>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1677e8] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg" type="submit"><FiSend /> {sent ? "Opening your email..." : "Prepare message"} <FiArrowUpRight /></button>
          <p className="m-0 text-xs leading-5 text-[#8aa1b6]">No account or form service required. Your message stays in your email client until you send it.</p>
        </form>
      </section>
    </main>
  );
}
