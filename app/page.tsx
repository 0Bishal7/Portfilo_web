"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projects } from "./data";

const skills = {
  Backend: ["Python", "FastAPI", "Django", "Flask", "REST APIs", "JWT", "OAuth"],
  Data: ["PostgreSQL", "MySQL", "Redis", "SQLAlchemy"],
  DevOps: ["Docker", "AWS", "Linux", "CI/CD", "Git"],
  AI: ["TensorFlow", "PyTorch", "Pandas", "NumPy"],
};

const ticks = [
  ["NIFTY 50", "24,323.85", "+0.68%"],
  ["BANKNIFTY", "52,342.10", "+1.12%"],
  ["SENSEX", "79,996.60", "+0.54%"],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Terminal({ close }: { close: () => void }) {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "$ whoami", "Bishal Roy — Senior Python Backend Engineer", "$ status", "Available for ambitious product engineering work."
  ]);
  const answers: Record<string, string> = {
    help: "Commands: whoami, skills, projects, contact, clear",
    whoami: "Bishal Roy — Senior Python Backend Engineer",
    skills: "Python · FastAPI · PostgreSQL · Docker · AI · WebSockets",
    projects: "Kuberav · Power School AI · Hello Teacher AI · Candidmen",
    contact: "Use the contact panel below — let's build something useful.",
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = command.trim().toLowerCase();
    if (!cmd) return;
    setHistory(cmd === "clear" ? [] : [...history, `$ ${cmd}`, answers[cmd] || `Command not found: ${cmd}. Try “help”.`]);
    setCommand("");
  };
  return (
    <motion.div className="terminal-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}>
      <motion.div className="terminal" initial={{ scale: .92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .95, y: 20 }} onMouseDown={(e) => e.stopPropagation()}>
        <div className="terminal-bar"><div><i/><i/><i/></div><span>bishal@production: ~</span><button onClick={close} aria-label="Close terminal">×</button></div>
        <div className="terminal-body" onClick={() => document.getElementById("terminal-input")?.focus()}>
          {history.map((line, i) => <p className={line.startsWith("$") ? "prompt" : ""} key={i}>{line}</p>)}
          <form onSubmit={submit}><span>$</span><input id="terminal-input" autoFocus value={command} onChange={(e) => setCommand(e.target.value)} aria-label="Terminal command" autoComplete="off" /></form>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TradingPanel() {
  const candles = useMemo(() => [34,52,38,69,58,83,74,91,61,79,96,88,106,92,118,128,109,135,124,148,141,159,151,170], []);
  return (
    <div className="trading-panel">
      <div className="panel-top"><div><span className="brand-mark">K</span><b>Kuberav</b><small>Trading OS</small></div><div className="live"><i/> WEBSOCKET LIVE</div></div>
      <div className="markets">{ticks.map((t) => <div key={t[0]}><small>{t[0]}</small><b>{t[1]}</b><span>{t[2]}</span></div>)}</div>
      <div className="chart-head"><div><small>NIFTY 50 · 1m</small><strong>24,323.85</strong></div><div className="chart-tabs"><span>1m</span><span>5m</span><span>1h</span></div></div>
      <div className="chart" aria-label="Animated market chart demonstration">
        <div className="chart-grid" />
        <svg viewBox="0 0 480 180" preserveAspectRatio="none" role="img"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" stopOpacity=".35"/><stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/></linearGradient></defs><path className="area" d={`M 0 160 ${candles.map((n,i)=>`L ${i*21} ${180-n}`).join(" ")} L 480 180 Z`}/><path className="line" d={`M 0 146 ${candles.map((n,i)=>`L ${i*21} ${180-n}`).join(" ")}`}/></svg>
        <div className="chart-price">24,323.85</div>
      </div>
      <div className="positions"><div><small>POSITION</small><small>QTY</small><small>AVG</small><small>P&amp;L</small></div><div><b>NIFTY 04JUL 24300 CE</b><span>50</span><span>₹118.40</span><strong>+₹4,280</strong></div></div>
      <div className="trade-actions"><button>BUY</button><button>SELL</button><div><small>Broker</small><b><i/> Connected</b></div></div>
    </div>
  );
}

function SectionTitle({ tag, children, copy }: { tag: string; children: React.ReactNode; copy?: string }) {
  return <div className="section-title"><div><span>{tag}</span><h2>{children}</h2></div>{copy && <p>{copy}</p>}</div>;
}

export default function Home() {
  const [terminal, setTerminal] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [typed, setTyped] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const phrases = ["scalable backend systems.", "AI-powered platforms.", "real-time trading infrastructure."];
  useEffect(() => { const id = setInterval(() => setTyped((n) => (n + 1) % phrases.length), 2600); return () => clearInterval(id); }, [phrases.length]);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="logo" href="#top"><span>BR</span><div>Bishal Roy<small>Backend Systems Engineer</small></div></a>
        <button className="menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? "×" : "☰"}</button>
        <div className={`nav-links ${mobileNav ? "open" : ""}`} onClick={() => setMobileNav(false)}><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <button className="console-button" onClick={() => setTerminal(true)}><span>›_</span> Open console</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-glow"/><div className="noise"/>
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="availability"><i/> Available for product engineering roles</div>
          <p className="hello">Hi, I’m Bishal Roy.</p>
          <h1>I engineer the systems<br/>behind <em>great products.</em></h1>
          <p className="lead">Senior Python Backend Engineer building secure APIs, intelligent platforms, and real-time infrastructure that stays fast when things get serious.</p>
          <div className="typing"><span>Currently building</span><AnimatePresence mode="wait"><motion.b key={typed} initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -14, opacity: 0 }}>{phrases[typed]}</motion.b></AnimatePresence></div>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowIcon/></a><a className="button ghost" href="#contact">Start a conversation</a></div>
          <div className="hero-links"><a href="https://github.com/0Bishal7" target="_blank" rel="noreferrer">GitHub <ArrowIcon/></a><a href="#contact">LinkedIn <ArrowIcon/></a><a href="#contact">Résumé <ArrowIcon/></a></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2, duration: .8 }}>
          <div className="system-card"><div className="system-head"><span><i/> PRODUCTION</span><small>System overview</small></div><div className="python-core"><div className="orbit orbit-one"><i/><i/><i/></div><div className="orbit orbit-two"><i/><i/></div><div className="python-logo">Py<small>THON</small></div></div><div className="service-row"><span>API Gateway<small>12ms</small></span><span>FastAPI<small>Healthy</small></span><span>Postgres<small>8 conns</small></span></div></div>
          <div className="float-card card-api"><span>API THROUGHPUT</span><b>2.4k <small>req/s</small></b><i>+18.2%</i></div>
          <div className="float-card card-uptime"><span>UPTIME</span><b>99.98%</b><div><i/><i/><i/><i/><i/><i/><i/></div></div>
        </motion.div>
      </section>

      <section className="stats shell" aria-label="Career highlights"><div><b>3+</b><span>Years shipping<br/>production software</span></div><div><b>20+</b><span>Production APIs<br/>designed &amp; delivered</span></div><div><b>85%</b><span>Manual workflow<br/>automation</span></div><div><b>50%</b><span>API performance<br/>improvement</span></div></section>

      <section className="section shell" id="about">
        <SectionTitle tag="01 / PROFILE" copy="I work where backend engineering, product thinking, and difficult real-world constraints meet.">Built for the work<br/>behind the interface.</SectionTitle>
        <div className="about-grid"><div className="manifesto"><p>I don’t just connect endpoints. I design the service boundaries, data flows, failure modes, and feedback loops that make a product dependable.</p><p>From AI education platforms to live trading infrastructure, I turn complicated workflows into systems teams can understand, operate, and grow.</p><div className="principles"><span>01<small>Measure before optimizing</small></span><span>02<small>Design for failure</small></span><span>03<small>Ship useful systems</small></span></div></div><div className="timeline"><div><b>2019</b><span>Started B.Tech</span></div><div><b>2023</b><span>Backend Developer</span></div><div><b>2024</b><span>Software Engineer</span></div><div className="active"><b>NOW</b><span>Senior Software Engineer<small>Building AI systems &amp; trading infrastructure</small></span></div><div><b>NEXT</b><span>Product Engineering Role</span></div></div></div>
      </section>

      <section className="section shell skills-section">
        <SectionTitle tag="02 / CAPABILITIES" copy="A pragmatic toolkit for taking products from a blank repository to observable production software.">Technology is the tool.<br/>Outcomes are the point.</SectionTitle>
        <div className="skill-grid">{Object.entries(skills).map(([group, items], index) => <motion.div className="skill-card" key={group} whileHover={{ y: -6 }}><div><span>0{index+1}</span><b>{group}</b></div><div>{items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div>
      </section>

      <section className="section work-section" id="work"><div className="shell"><SectionTitle tag="03 / FEATURED SYSTEM" copy="Not a concept screen: a product-shaped system designed around real execution flows.">Meet Kuberav.<br/>A trading operating system.</SectionTitle><div className="kuberav"><div className="kuberav-copy"><div className="project-index">FLAGSHIP PROJECT · 01</div><h3>Trade with clarity.<br/><em>Engineer for reality.</em></h3><p>Kuberav unifies broker connectivity, strategy execution, live market data, and risk-aware order management behind one fast control plane.</p><div className="feature-list">{["Live & paper trading", "Multi-broker integration", "Strategy engine", "WebSocket market data", "Option chain", "Trailing stop-loss", "Webhook automation", "Position dashboard"].map(f=><span key={f}><i>✓</i>{f}</span>)}</div><div className="tag-list">{projects[0].tags.map(t=><span key={t}>{t}</span>)}</div><Link className="text-link" href="/projects/kuberav">Read the engineering case study <ArrowIcon/></Link></div><TradingPanel/></div></div></section>

      <section className="section shell architecture"><SectionTitle tag="04 / ARCHITECTURE" copy="Clear boundaries make fast systems safer to change.">A system you can<br/>reason about.</SectionTitle><div className="arch-flow">{[["01","Client","Dashboard · Mobile"],["02","API Gateway","Auth · Rate limits"],["03","FastAPI Core","REST · WebSockets"],["04","Trading Engine","Strategies · Risk"],["05","Broker Layer","Adapters · Webhooks"],["06","Market","Exchange · Feeds"]].map((n,i)=><div className={i===2||i===3?"accent":""} key={n[0]}><small>{n[0]}</small><b>{n[1]}</b><span>{n[2]}</span>{i<5&&<i>→</i>}</div>)}</div><div className="arch-foot"><span><i/> Event-driven updates</span><span><i/> JWT + scoped access</span><span><i/> Durable order state</span><span><i/> Observable services</span></div></section>

      <section className="section shell" id="experience"><SectionTitle tag="05 / EXPERIENCE" copy="Each step added a new layer: implementation, ownership, architecture, and measurable product impact.">Growing scope.<br/>Compounding impact.</SectionTitle><div className="experience-card"><div><span>2024 — PRESENT</span><b>Informaticae Technology</b><small>Product engineering · AI platforms</small></div><div><h3>Senior Software Engineer</h3><p>Designing and delivering backend systems for AI-powered education products, improving high-volume workflows and turning model capabilities into reliable product experiences.</p><div className="impact-row"><span><b>85%</b>less manual work</span><span><b>50%</b>faster APIs</span><span><b>80%</b>grading automation</span></div></div></div></section>

      <section className="section shell"><SectionTitle tag="06 / SELECTED WORK" copy="Products shaped by user needs, system constraints, and measurable operational improvements.">More systems.<br/>Different constraints.</SectionTitle><div className="projects-grid">{projects.slice(1).map((project,index)=><motion.article className="project-card" key={project.slug} whileHover={{ y: -7 }}><div className={`project-art art-${index+1}`}><span>{project.name.split(" ").map(n=>n[0]).join("")}</span><div/><div/></div><span>{project.eyebrow}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0,3).map(t=><span key={t}>{t}</span>)}</div><Link href={`/projects/${project.slug}`}>View case study <ArrowIcon/></Link></motion.article>)}</div></section>

      <section className="section shell proof"><SectionTitle tag="07 / PROOF OF WORK">Numbers that tell<br/>the useful part.</SectionTitle><div className="proof-grid"><div><b>85<sup>%</sup></b><p>Reduction in manual operational work through thoughtful automation.</p></div><div><b>50<sup>%</sup></b><p>API performance improvement across critical application paths.</p></div><div><b>80<sup>%</sup></b><p>Grading workflows automated while preserving educator control.</p></div><div><b>3<sup>+</sup></b><p>Years turning complex requirements into production software.</p></div></div></section>

      <section className="section contact shell" id="contact"><div className="contact-card"><span>LET’S BUILD WHAT’S NEXT</span><h2>Have a hard backend problem?<br/><em>I’d like to hear it.</em></h2><p>I’m interested in Python backend, FastAPI, platform, and senior software engineering roles where reliability and product judgment matter.</p><a className="button primary" href="mailto:bishalroy@example.com">Start a conversation <ArrowIcon/></a><small>Replace the placeholder email in <code>app/page.tsx</code> before publishing.</small></div></section>
      <footer className="footer shell"><a className="logo" href="#top"><span>BR</span><div>Bishal Roy<small>Backend Systems Engineer</small></div></a><p>Built with Next.js, TypeScript &amp; Framer Motion.</p><div><a href="https://github.com/0Bishal7" target="_blank" rel="noreferrer">GitHub</a><a href="#contact">LinkedIn</a><a href="#top">Back to top ↑</a></div></footer>
      <AnimatePresence>{terminal && <Terminal close={() => setTerminal(false)} />}</AnimatePresence>
    </main>
  );
}
