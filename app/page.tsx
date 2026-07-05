"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { FormEvent, useState } from "react";
import { projects } from "./data";

const experience = [
  {
    period: "JAN 2024 - PRESENT",
    role: "Senior Software Engineer",
    company: "Informaticae Technology Pvt. Ltd.",
    location: "Kolkata, India",
    points: [
      "Built AI-driven teacher modules for assignment generation and academic workflow automation.",
      "Reduced manual preparation effort by 85% and automated answer checking and student analytics.",
      "Built multilingual, multi-difficulty assessment configuration with weighted scoring logic.",
      "Mentored junior developers and improved delivery quality through reviews and optimization."
    ]
  },
  {
    period: "AUG 2023 - DEC 2024",
    role: "Software Engineer",
    company: "Informaticae Technology Pvt. Ltd.",
    location: "Kolkata, India",
    points: [
      "Built scalable FastAPI services for Hello Teacher AI.",
      "Implemented secure JWT and OAuth authentication and authorization.",
      "Optimized SQL queries, indexing, and caching to improve API response time by 50%.",
      "Worked with Docker and CI/CD pipelines for reliable deployment and testing."
    ]
  },
  {
    period: "MAR 2023 - AUG 2023",
    role: "Backend Developer Intern",
    company: "Runtime Solutions",
    location: "Kolkata, India",
    points: [
      "Built scalable web applications using Django and Flask.",
      "Designed optimized relational database schemas and backend workflows.",
      "Implemented Redis caching for faster application response times."
    ]
  }
];

const skillGroups = [
  ["Backend", ["Python", "FastAPI", "Django", "Flask", "REST APIs", "WebSockets"]],
  ["Database", ["PostgreSQL", "SQLAlchemy", "SQL", "Redis"]],
  ["Authentication", ["JWT", "OAuth", "Secure Login", "Role-Based Access"]],
  ["DevOps", ["Docker", "Git", "AWS", "Linux", "CI/CD"]],
  ["Frontend", ["HTML", "CSS", "JavaScript", "React"]],
  ["AI & Data", ["Pandas", "NumPy", "TensorFlow", "PyTorch", "Matplotlib"]]
] as const;

const achievements = [
  ["85%", "Manual preparation effort reduced"],
  ["80%", "Grading time reduced"],
  ["50%", "API response time improved"],
  ["3+", "Years building production software"],
  ["LIVE", "AI and trading platform experience"]
];

const kuberavFeatures = [
  "Live market watch and broker orders", "Paper and live trading modes", "Options and strategy trading",
  "Stop-loss, targets, and trailing exits", "Advanced charts and option chain", "Webhook automation",
  "Partial and complete position exits", "Real-time WebSocket updates", "Secure broker-token management"
];

const kuberavScreens = [
  { src: "/projects/kuberav/market-chart.png", title: "Live market chart", copy: "Real-time NIFTY charting with technical indicators and market watch." },
  { src: "/projects/kuberav/automated-trade.png", title: "Automated trade execution", copy: "Paper-trade automation with entry, stop-loss, target, and live status overlays." },
  { src: "/projects/kuberav/strategy-dashboard.png", title: "Strategy control dashboard", copy: "Multi-index strategy configuration, risk metrics, and active position management." }
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="brief-heading"><div><span>{eyebrow}</span><h2>{title}</h2></div>{copy && <p>{copy}</p>}</div>;
}

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const orderedProjects = ["kuberav", "hello-teacher-ai", "power-school-ai"].map(slug => projects.find(project => project.slug === slug)!);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name") || "a visitor"}`);
    const body = encodeURIComponent(`${data.get("message") || ""}\n\nFrom: ${data.get("email") || ""}`);
    window.location.href = `mailto:roybishal200189@gmail.com?subject=${subject}&body=${body}`;
  };

  return <main>
    <motion.div className="scroll-progress" style={{ scaleX }} />

    <nav className="nav shell brief-nav" aria-label="Main navigation">
      <a className="logo" href="#home"><span>BR</span><div>Bishal Roy<small>Senior Software Engineer</small></div></a>
      <button className="menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? "×" : "☰"}</button>
      <div className={`nav-links ${mobileNav ? "open" : ""}`} onClick={() => setMobileNav(false)}>
        <a href="#home">Home</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
      </div>
      <a className="button primary nav-resume" href="/Bishal-Roy-Resume.pdf" download>Download Resume</a>
    </nav>

    <section className="brief-hero shell" id="home">
      <motion.div className="brief-hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <div className="availability"><i/> Available for product engineering roles</div>
        <p className="hero-intro">Hi, I&apos;m Bishal Roy</p>
        <h1>Senior Software Engineer<br/><em>building systems that scale.</em></h1>
        <div className="hero-stack">Python <i/> FastAPI <i/> Django <i/> AI Platforms <i/> Real-Time Trading</div>
        <p className="lead">I build scalable backend systems, AI-powered platforms, and real-time web applications using Python, FastAPI, PostgreSQL, WebSockets, Docker, and cloud-ready architecture.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">View Projects <Arrow/></a><a className="button ghost" href="/Bishal-Roy-Resume.pdf" download>Download Resume</a><a className="button text-button" href="#contact">Contact Me</a></div>
      </motion.div>
      <motion.div className="saas-visual" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15, duration: .75 }}>
        <div className="visual-glow"/>
        <div className="dashboard-window">
          <div className="dashboard-bar"><span><i/><i/><i/></span><small>production.system</small><b>● LIVE</b></div>
          <div className="dashboard-body">
            <div className="api-map"><div className="core-node">Py<small>FASTAPI CORE</small></div><span className="node node-one">API<small>12ms</small></span><span className="node node-two">DB<small>PostgreSQL</small></span><span className="node node-three">WS<small>Real-time</small></span><i/><i/><i/></div>
            <div className="dashboard-metrics"><span><small>Requests</small><b>2.4k/s</b></span><span><small>Uptime</small><b>99.98%</b></span><span><small>Latency</small><b>12ms</b></span></div>
          </div>
        </div>
        <div className="metric-float float-experience"><b>3+</b><span>Years experience</span></div>
        <div className="metric-float float-impact"><b>85%</b><span>Manual work reduced</span></div>
        <div className="metric-float float-speed"><b>50%</b><span>Faster APIs</span></div>
      </motion.div>
    </section>

    <section className="logo-strip shell" aria-label="Core expertise"><span>PYTHON</span><span>FASTAPI</span><span>DJANGO</span><span>POSTGRESQL</span><span>DOCKER</span><span>WEBSOCKETS</span></section>

    <section className="brief-section shell" id="about">
      <SectionHeading eyebrow="ABOUT ME" title="Backend depth. Product perspective." copy="I work where dependable architecture, automation, and useful product experiences meet."/>
      <div className="about-panel"><div><p className="about-lead">I am a Python Backend and Full-Stack Developer with 3+ years of experience building scalable APIs, AI-driven education platforms, automation systems, and real-time trading applications.</p><p>My work focuses on backend architecture, FastAPI, Django, REST APIs, WebSockets, PostgreSQL, authentication, performance optimization, and production-ready software development.</p><p>I have worked on platforms like <a href="https://hello-teacher.ai/" target="_blank" rel="noreferrer">Hello Teacher AI</a> and <a href="https://aps.academicae.com/" target="_blank" rel="noreferrer">Academicae Schools</a>, and built <a href="https://kuberav.com/" target="_blank" rel="noreferrer">Kuberav</a>, my algorithmic trading platform.</p></div><div className="about-values"><span><b>01</b>Design for reliability</span><span><b>02</b>Measure before optimizing</span><span><b>03</b>Keep complexity understandable</span><span><b>04</b>Ship meaningful outcomes</span></div></div>
    </section>

    <section className="brief-section section-tint" id="experience"><div className="shell">
      <SectionHeading eyebrow="EXPERIENCE" title="Growing ownership. Measurable impact." copy="From backend implementation to system architecture, optimization, and engineering leadership."/>
      <div className="experience-timeline">{experience.map((item, index) => <motion.article className="role-card" key={`${item.role}-${item.period}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
        <div className="role-marker"><span>0{index + 1}</span></div><div className="role-meta"><span>{item.period}</span><h3>{item.role}</h3><b>{item.company}</b><small>{item.location}</small></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
      </motion.article>)}</div>
    </div></section>

    <section className="brief-section shell" id="projects">
      <SectionHeading eyebrow="FEATURED PROJECTS" title="Live products. Real constraints." copy="Production-oriented systems spanning trading infrastructure, AI education, and academic operations."/>
      <div className="featured-grid">{orderedProjects.map((project, index) => <motion.article className={`featured-card project-tone-${index + 1}`} key={project.slug} whileHover={{ y: -6 }}>
        <div className={`project-preview ${index === 0 ? "has-product-image" : ""}`}>{index === 0 && <Image src={kuberavScreens[0].src} alt="Kuberav live market chart interface" fill sizes="(max-width: 760px) 100vw, 33vw"/>}<div className="preview-top"><span>0{index + 1}</span><b>LIVE PRODUCT</b></div>{index !== 0 && <><div className="preview-mark">{project.name.split(" ").map(word => word[0]).join("")}</div><div className="preview-lines"><i/><i/><i/></div></>}</div>
        <span className="project-eyebrow">{project.eyebrow}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="tag-list">{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-actions"><a href={project.liveUrl} target="_blank" rel="noreferrer">Visit Website <Arrow/></a><Link href={`/projects/${project.slug}`}>Case Study <Arrow/></Link></div>
      </motion.article>)}</div>
    </section>

    <section className="brief-section kuberav-case" id="case-study"><div className="shell">
      <SectionHeading eyebrow="KUBERAV CASE STUDY" title="A trading control plane built for reality." copy="A personal algorithmic trading platform bringing live data, execution, automation, and risk controls into one dashboard."/>
      <div className="case-layout"><div className="case-copy"><div className="case-block"><span>01 / PROBLEM</span><h3>Fragmented trading workflows.</h3><p>Traders need a centralized platform to manage live market data, broker orders, positions, automated strategies, and risk from one dashboard.</p></div><div className="case-block"><span>02 / SOLUTION</span><h3>One real-time operating layer.</h3><p>Kuberav combines live market watch, order execution, paper trading, strategy automation, WebSocket updates, broker integration, and admin controls.</p></div><div className="case-result"><b>RESULT</b><p>A production-style platform demonstrating real-time backend engineering, API integration, authentication, order management, and automation logic.</p></div><div className="project-links"><a className="button primary" href="https://kuberav.com/" target="_blank" rel="noreferrer">Visit Kuberav <Arrow/></a><Link className="button ghost" href="/projects/kuberav">View Full Case Study</Link></div></div>
      <div className="case-architecture"><div className="architecture-stack">{["Frontend Dashboard", "FastAPI Backend", "PostgreSQL Database", "Broker API Integration", "Trading Engine", "WebSocket Updates"].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b>{index < 5 && <i>↓</i>}</div>)}</div><div className="case-features">{kuberavFeatures.map(feature => <span key={feature}><i>✓</i>{feature}</span>)}</div></div></div>
      <div className="product-gallery"><div className="gallery-heading"><span>PRODUCT GALLERY</span><h3>Kuberav in production.</h3><p>Live charting, automated execution, and strategy management from the working platform.</p></div><div className="gallery-grid">{kuberavScreens.map((screen, index) => <figure className={index === 0 ? "gallery-featured" : ""} key={screen.src}><div><Image src={screen.src} alt={`${screen.title} in Kuberav`} width={2940} height={1912} sizes={index === 0 ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}/></div><figcaption><b>{screen.title}</b><span>{screen.copy}</span></figcaption></figure>)}</div></div>
    </div></section>

    <section className="brief-section shell" id="skills">
      <SectionHeading eyebrow="TECHNICAL SKILLS" title="A practical production toolkit." copy="Tools selected for maintainability, performance, and predictable delivery."/>
      <div className="skill-groups">{skillGroups.map(([group, items], index) => <motion.div className="skill-group" key={group} whileHover={{ y: -4 }}><div><span>0{index + 1}</span><h3>{group}</h3></div><div>{items.map(item => <b key={item}>{item}</b>)}</div></motion.div>)}</div>
    </section>

    <section className="brief-section achievements section-tint"><div className="shell">
      <SectionHeading eyebrow="ACHIEVEMENTS" title="Numbers behind the work."/>
      <div className="achievement-grid">{achievements.map(([number, label], index) => <motion.div key={label} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><b>{number}</b><span>{label}</span></motion.div>)}</div>
    </div></section>

    <section className="brief-section shell" id="education">
      <SectionHeading eyebrow="EDUCATION & CERTIFICATION" title="Foundations and continued learning."/>
      <div className="education-grid"><article><span>2019 - 2023</span><h3>B.Tech in Computer Science Engineering</h3><p>Gargi Memorial Institute of Technology, Kolkata</p><b>GPA: 8.5</b></article><article><span>JAN 2025 - MAR 2026</span><h3>Advanced Certification in Applied Data Science, Machine Learning and IoT</h3><p>Indian Institute of Technology Guwahati</p><b>Advanced Certification</b></article></div>
    </section>

    <section className="resume-banner shell"><div><span>RESUME</span><h2>Want the concise version?</h2><p>Download a recruiter-friendly overview of my experience, skills, education, and product work.</p></div><a className="button primary" href="/Bishal-Roy-Resume.pdf" download>Download Resume <Arrow/></a></section>

    <section className="brief-section contact-section" id="contact"><div className="shell contact-layout"><div className="contact-copy"><span>LET&apos;S WORK TOGETHER</span><h2>Let&apos;s build something<br/><em>scalable together.</em></h2><p>I&apos;m interested in backend, platform, and senior software engineering opportunities where reliability and product judgment matter.</p><div className="contact-details"><a href="mailto:roybishal200189@gmail.com"><b>Email</b>roybishal200189@gmail.com</a><a href="tel:+918942943435"><b>Mobile</b>+91 89429 43435</a><span><b>Location</b>Kolkata, India</span><a href="https://github.com/0Bishal7" target="_blank" rel="noreferrer"><b>GitHub</b>0Bishal7 ↗</a></div></div>
      <form className="contact-form" onSubmit={sendMessage}><div><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Jane Smith"/></div><div><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="jane@company.com"/></div><div><label htmlFor="message">How can I help?</label><textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project..."/></div><button className="button primary" type="submit">Send Message <Arrow/></button><small>This opens your email app. No data is stored.</small></form>
    </div></section>

    <footer className="footer shell brief-footer"><a className="logo" href="#home"><span>BR</span><div>Bishal Roy<small>Senior Software Engineer</small></div></a><p>Python backend systems, AI platforms, and real-time products.</p><div><a href="mailto:roybishal200189@gmail.com">Email</a><a href="https://github.com/0Bishal7" target="_blank" rel="noreferrer">GitHub</a><a href="#home">Back to top ↑</a></div></footer>
  </main>;
}
