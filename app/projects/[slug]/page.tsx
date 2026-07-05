import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

const kuberavScreens = [
  { src: "/projects/kuberav/live-target-trailing-sl.png", width: 2901, height: 1743, title: "Live targets and trailing SL", copy: "Entry, armed level, target, and stop-loss plotted on the live chart." },
  { src: "/projects/kuberav/entry-exit-management.png", width: 2925, height: 1655, title: "Entry and exit management", copy: "Partial exits, complete exits, targets, trailing SL, and live P&L." },
  { src: "/projects/kuberav/candle-wise-trailing.png", width: 2891, height: 1714, title: "Candle-wise trailing", copy: "Candle-aware trailing stops with clear live-market entry and exit visualization." }
];

const academicaeScreens = [
  { src: "/projects/academicae/assignment-builder.png", width: 2898, height: 1758, title: "Multilingual assignment builder", copy: "Configure class, section, curriculum, language, chapters, and assignment type." },
  { src: "/projects/academicae/teacher-dashboard.png", width: 2932, height: 1747, title: "Teacher operations dashboard", copy: "Classes, attendance, assignments, timelines, and academic activity in one workspace." },
  { src: "/projects/academicae/student-progress.png", width: 2907, height: 1762, title: "Student progress analytics", copy: "Subject-level progress, assessment completion, and assignment performance insights." }
];

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main className="case-page">
    <nav className="nav shell"><Link className="logo" href="/"><span>BR</span><div>Bishal Roy<small>Backend Systems Engineer</small></div></Link><Link className="console-button" href="/#work">← Back to work</Link></nav>
    <header className="case-hero shell"><span>{project.eyebrow}</span><h1>{project.name}</h1><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.liveUrl && <a className="button primary case-live" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live product <b>↗</b></a>}</header>
    <section className="case-metric shell"><small>MEASURABLE OUTCOME</small><p>{project.impact}</p></section>
    <section className="case-body shell"><aside><span>CASE STUDY</span><a href="#problem">01 · Problem</a><a href="#solution">02 · Solution</a><a href="#challenge">03 · Challenge</a><a href="#outcome">04 · Outcome</a></aside><div><article id="problem"><span>01 / PROBLEM</span><h2>The context.</h2><p>{project.problem}</p></article><article id="solution"><span>02 / SOLUTION</span><h2>The product response.</h2><p>{project.solution}</p></article><article id="challenge"><span>03 / ENGINEERING CHALLENGE</span><h2>Where the real work lived.</h2><p>{project.challenge}</p></article><article id="outcome"><span>04 / OUTCOME</span><h2>What changed.</h2><p>{project.outcome}</p></article></div></section>
    {project.slug === "kuberav" && <section className="case-screens shell"><span>LIVE RISK AUTOMATION</span><h2>Candle-wise trailing, targets, and exits.</h2><div>{kuberavScreens.map((screen, index) => <figure className={index === 0 ? "featured" : ""} key={screen.src}><div><Image src={screen.src} alt={`${screen.title} in Kuberav`} width={screen.width} height={screen.height}/></div><figcaption><b>{screen.title}</b><span>{screen.copy}</span></figcaption></figure>)}</div></section>}
    {project.slug === "power-school-ai" && <section className="case-screens shell"><span>ACADEMIC WORKFLOWS</span><h2>Assignments, classrooms, and progress—connected.</h2><div>{academicaeScreens.map((screen, index) => <figure className={index === 0 ? "featured" : ""} key={screen.src}><div><Image src={screen.src} alt={`${screen.title} in Academicae Schools`} width={screen.width} height={screen.height}/></div><figcaption><b>{screen.title}</b><span>{screen.copy}</span></figcaption></figure>)}</div></section>}
    <section className="case-next shell"><span>NEXT PROJECT</span><Link href={`/projects/${next.slug}`}>{next.name} <b>↗</b></Link></section>
  </main>;
}
