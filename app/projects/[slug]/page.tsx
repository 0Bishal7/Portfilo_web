import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

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
    <section className="case-next shell"><span>NEXT PROJECT</span><Link href={`/projects/${next.slug}`}>{next.name} <b>↗</b></Link></section>
  </main>;
}
