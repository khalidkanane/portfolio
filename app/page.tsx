import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Home() {
  return <main>
  
    <section id="home" className="hero section-shell"><div className="hero-copy">
      <p className="eyebrow">Full Stack Developer <span>•</span> AI Enthusiast</p><h1>Hi, I&apos;m <em>Khalid</em>.<br />I build intelligent things.</h1><p className="hero-lede">I build modern web applications and explore AI, Data Science, and Machine Learning through practical projects.</p><div className="button-row"><Link className="button button-primary" href="/projects">View Projects <span>↗</span></Link><a className="button button-quiet" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div><div className="tech-strip">React <span>•</span> Laravel <span>•</span> Firebase <span>•</span> Machine Learning</div></div><div className="hero-terminal" aria-label="A code preview showing Khalid&apos;s stack"><div className="terminal-bar"><span /><span /><span /><small>khalid.config.ts</small></div><pre><code><span className="code-muted">{"// building intelligent systems"}</span>{"\n"}<span className="code-keyword">const</span> khalid = {'{'}{"\n"}  role: <span className="code-string">&quot;Full Stack Developer&quot;</span>,{"\n"}  focus: [<span className="code-string">&quot;AI&quot;</span>, <span className="code-string">&quot;Web&quot;</span>],{"\n"}  learning: <span className="code-value">&quot;Data Science&quot;</span>{"\n"}{'}'}</code></pre><div className="terminal-glow" /></div><Link href="/about" className="scroll-cue" aria-label="Read about Khalid">↓ <span>explore portfolio</span></Link></section>

    <footer className="site-footer section-shell"><span>© 2026 Khalid Kanane</span><span>Designed &amp; built with care</span><a href="#home">Back to top ↑</a></footer>
  
  </main>;
}
