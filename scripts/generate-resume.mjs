import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";

const navy = "0.059 0.090 0.165";
const blue = "0.145 0.388 0.922";
const slate = "0.278 0.333 0.412";
const muted = "0.392 0.455 0.545";
const line = "0.886 0.910 0.941";
const esc = (value) => value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
const page = () => [];
const text = (p, x, y, value, size = 9, font = "F1", color = navy) => p.push(`BT /${font} ${size} Tf ${color} rg ${x} ${y} Td (${esc(value)}) Tj ET`);
const rule = (p, y) => p.push(`${line} RG 0.7 w 47 ${y} m 548 ${y} l S`);
const bullet = (p, y, value) => text(p, 57, y, `- ${value}`, 8.5, "F1", slate);
const section = (p, y, value) => text(p, 47, y, value, 10, "F2", blue);

const p1 = page();
text(p1, 47, 786, "BISHAL ROY", 28, "F2");
text(p1, 47, 762, "SENIOR SOFTWARE ENGINEER", 13, "F2", blue);
text(p1, 47, 741, "Python Backend | FastAPI | Django | AI Platforms | Real-Time Trading Systems", 9, "F1", slate);
text(p1, 47, 720, "Kolkata, India | +91 89429 43435 | roybishal200189@gmail.com | github.com/0Bishal7", 8, "F1", muted);
rule(p1, 706);
section(p1, 681, "PROFESSIONAL SUMMARY");
text(p1, 47, 662, "Python backend and full-stack developer with 3+ years of experience building scalable APIs, AI-driven", 9);
text(p1, 47, 648, "education platforms, automation systems, and real-time trading applications. Experienced in FastAPI, Django,", 9);
text(p1, 47, 634, "PostgreSQL, WebSockets, Docker, authentication, performance optimization, and production software.", 9);
section(p1, 602, "CORE SKILLS");
[["Backend","Python, FastAPI, Django, Flask, REST APIs, WebSockets"],["Database","PostgreSQL, SQLAlchemy, SQL, Redis"],["Security","JWT, OAuth, secure login, role-based access"],["DevOps","Docker, Git, AWS, Linux, CI/CD"],["AI / Data","Pandas, NumPy, TensorFlow, PyTorch, Matplotlib"]].forEach(([a,b],i)=>{text(p1,47,582-i*17,a,8.5,"F2");text(p1,125,582-i*17,b,8.5,"F1",slate)});
section(p1, 480, "PROFESSIONAL EXPERIENCE");
text(p1,47,458,"Senior Software Engineer",11,"F2");text(p1,47,442,"INFORMATICAE TECHNOLOGY PVT. LTD.",8.5,"F2",blue);text(p1,410,458,"Jan 2024 - Present",8,"F1",muted);text(p1,459,442,"Kolkata, India",8,"F1",muted);
bullet(p1,421,"Built AI-driven teacher modules for assignment generation and academic workflow automation.");
bullet(p1,405,"Reduced manual preparation effort by 85% and automated answer checking and student analytics.");
bullet(p1,389,"Built multilingual, multi-difficulty assessment configuration with weighted scoring logic.");
bullet(p1,373,"Mentored junior developers and improved code quality through reviews and optimization.");
rule(p1,351);
text(p1,47,329,"Software Engineer",11,"F2");text(p1,47,313,"INFORMATICAE TECHNOLOGY PVT. LTD.",8.5,"F2",blue);text(p1,410,329,"Aug 2023 - Dec 2024",8,"F1",muted);text(p1,459,313,"Kolkata, India",8,"F1",muted);
bullet(p1,292,"Built scalable REST APIs using FastAPI for Hello Teacher AI.");bullet(p1,276,"Implemented secure authentication and authorization using JWT and OAuth.");bullet(p1,260,"Optimized SQL queries, indexing, and caching, improving API response time by 50%.");bullet(p1,244,"Worked with Docker and CI/CD pipelines for reliable deployment and testing.");
rule(p1,221);
text(p1,47,199,"Backend Developer Intern",11,"F2");text(p1,47,183,"RUNTIME SOLUTIONS",8.5,"F2",blue);text(p1,421,199,"Mar 2023 - Aug 2023",8,"F1",muted);text(p1,459,183,"Kolkata, India",8,"F1",muted);
bullet(p1,162,"Built scalable web applications using Django and Flask.");bullet(p1,146,"Designed optimized relational database schemas and implemented Redis caching.");
text(p1,47,44,"Bishal Roy | Resume",7,"F1",muted);text(p1,526,44,"1 / 2",7,"F1",muted);

const p2 = page();
text(p2,47,790,"SELECTED PRODUCT WORK",18,"F2");rule(p2,775);
text(p2,47,744,"KUBERAV - ALGORITHMIC TRADING PLATFORM",12,"F2",blue);text(p2,436,744,"kuberav.com",8,"F1",muted);
text(p2,47,724,"Personal web-based trading platform for live market data, broker orders, strategy automation,",9);text(p2,47,710,"paper trading, options, risk controls, and real-time WebSocket updates from one dashboard.",9);
bullet(p2,687,"Live and paper trading, broker integration, positions, order book, and trade history");bullet(p2,671,"Stop-loss, targets, trailing exits, charts, option chain, and webhook automation");bullet(p2,655,"FastAPI, Python, SQLAlchemy, PostgreSQL, REST APIs, WebSockets");
text(p2,47,617,"HELLO TEACHER AI - AI EDUCATION PLATFORM",12,"F2",blue);text(p2,430,617,"hello-teacher.ai",8,"F1",muted);
text(p2,47,597,"Contributed scalable backend APIs, secure authentication, teacher assignment workflows, subject",9);text(p2,47,583,"management, and model question generation for an AI-powered education platform.",9);bullet(p2,560,"Python, FastAPI, PostgreSQL, JWT, OAuth, REST APIs, Docker");
text(p2,47,522,"ACADEMICAE SCHOOLS - ACADEMIC PLATFORM",12,"F2",blue);text(p2,424,522,"aps.academicae.com",8,"F1",muted);
text(p2,47,502,"Contributed dynamic assessment configuration, automated answer checking, student analytics,",9);text(p2,47,488,"multilingual content, difficulty logic, and academic workflow automation.",9);bullet(p2,465,"Python, FastAPI, PostgreSQL, SQL, REST APIs, Docker");
section(p2,426,"MEASURABLE IMPACT");
[[47,"85%","manual effort reduced"],[178,"80%","grading time reduced"],[309,"50%","API response improved"],[440,"3+","years experience"]].forEach(([x,n,l])=>{text(p2,x,400,n,18,"F2");text(p2,x,386,l,8,"F1",slate)});
section(p2,344,"EDUCATION");text(p2,47,321,"B.Tech in Computer Science Engineering",10,"F2");text(p2,47,305,"Gargi Memorial Institute of Technology, Kolkata | GPA: 8.5 | 2019 - 2023",8.5,"F1",slate);
section(p2,267,"CERTIFICATION");text(p2,47,244,"Advanced Certification in Applied Data Science, Machine Learning and IoT",10,"F2");text(p2,47,228,"Indian Institute of Technology Guwahati | Jan 2025 - Mar 2026",8.5,"F1",slate);
section(p2,188,"ADDITIONAL");text(p2,47,167,"Frontend",8.5,"F2");text(p2,125,167,"HTML, CSS, JavaScript, React",8.5,"F1",slate);text(p2,47,150,"Focus",8.5,"F2");text(p2,125,150,"Backend architecture, performance, automation, and product engineering",8.5,"F1",slate);
rule(p2,106);text(p2,47,82,"Open to backend, platform, and senior software engineering opportunities.",11,"F2");text(p2,47,65,"roybishal200189@gmail.com | github.com/0Bishal7",9,"F2",blue);text(p2,47,44,"Bishal Roy | Resume",7,"F1",muted);text(p2,526,44,"2 / 2",7,"F1",muted);

const streams = [p1.join("\n"), p2.join("\n")];
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [6 0 R 8 0 R] /Count 2 >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents 7 0 R >>",
  `<< /Length ${Buffer.byteLength(streams[0])} >>\nstream\n${streams[0]}\nendstream`,
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents 9 0 R >>",
  `<< /Length ${Buffer.byteLength(streams[1])} >>\nstream\n${streams[1]}\nendstream`
];

let pdf = "%PDF-1.4\n% resume\n";
const offsets = [0];
objects.forEach((object, index) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
offsets.slice(1).forEach(offset => { pdf += `${String(offset).padStart(10, "0")} 00000 n \n`; });
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;

mkdirSync("output/pdf", { recursive: true });
mkdirSync("public", { recursive: true });
writeFileSync("output/pdf/Bishal-Roy-Resume.pdf", pdf, "binary");
copyFileSync("output/pdf/Bishal-Roy-Resume.pdf", "public/Bishal-Roy-Resume.pdf");
