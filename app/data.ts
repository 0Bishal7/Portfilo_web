export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  impact: string;
  tags: string[];
  problem: string;
  solution: string;
  challenge: string;
  outcome: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "kuberav",
    name: "Kuberav",
    eyebrow: "Flagship · Trading infrastructure",
    summary: "A unified algorithmic trading platform built for live execution, paper trading, broker integrations, and real-time market workflows.",
    impact: "Real-time, multi-broker trading operations in one production-oriented interface.",
    tags: ["FastAPI", "PostgreSQL", "WebSockets", "SQLAlchemy", "Docker"],
    problem: "Traders need to coordinate strategies, orders, positions, and broker-specific workflows across fragmented tools.",
    solution: "A central trading control plane combining live and paper execution, strategy orchestration, option chains, webhooks, and risk controls.",
    challenge: "Keeping order state, market data, P&L, and broker acknowledgements synchronized under real-time load.",
    outcome: "A modular, observable foundation designed to grow from personal strategies into production trading infrastructure.",
    liveUrl: "https://kuberav.com/"
  },
  {
    slug: "power-school-ai",
    name: "Academicae Schools",
    eyebrow: "AI · School operations",
    summary: "AI-assisted academic workflows that reduce repetitive work for educators and make feedback dramatically faster.",
    impact: "Up to 80% grading automation across supported workflows.",
    tags: ["Python", "FastAPI", "AI", "PostgreSQL"],
    problem: "Teachers lose valuable time to repetitive grading and administrative workflows.",
    solution: "Purpose-built AI services that assist with evaluation and structured academic operations.",
    challenge: "Making AI output useful, consistent, and safe inside real classroom workflows.",
    outcome: "Faster feedback loops and more time for educators to focus on students.",
    liveUrl: "https://aps.academicae.com/"
  },
  {
    slug: "hello-teacher-ai",
    name: "Hello Teacher AI",
    eyebrow: "AI · Productivity",
    summary: "An intelligent teacher assistant for generating, organizing, and delivering classroom-ready material.",
    impact: "Automated high-friction teaching workflows with human review built in.",
    tags: ["Python", "Django", "NLP", "REST API"],
    problem: "Creating differentiated classroom content is important, but relentlessly time-consuming.",
    solution: "A focused AI assistant that turns teacher intent into reusable educational artifacts.",
    challenge: "Balancing speed with tone, curriculum context, and educator control.",
    outcome: "A practical AI workflow that supports teachers without replacing their judgment.",
    liveUrl: "https://hello-teacher.ai/"
  },
  {
    slug: "candidmen",
    name: "Candidmen",
    eyebrow: "Platform · Backend",
    summary: "A scalable backend platform with secure APIs, structured data flows, and production-grade service boundaries.",
    impact: "Reliable application services designed around maintainable domain logic.",
    tags: ["Django", "REST", "MySQL", "Docker"],
    problem: "Product growth becomes fragile when business rules and data access are tightly coupled.",
    solution: "Clear service boundaries, secure endpoints, and durable data models.",
    challenge: "Evolving features without introducing regressions into core flows.",
    outcome: "A cleaner platform foundation ready for iterative product delivery."
  }
];
