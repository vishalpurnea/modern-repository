import { ContactForm } from "./components/contact-form";
import { HeroAvatar } from "./components/hero-avatar";
import { ProjectIcon } from "./components/project-icon";

const projects = [
  {
    title: "AI Recipe Generator",
    icon: "recipe" as const,
    description:
      "Turn pantry ingredients into personalized recipes with AI-powered suggestions and dietary filters.",
    tags: ["Next.js", "OpenAI", "TypeScript"],
  },
  {
    title: "Habit Tracker",
    icon: "habits" as const,
    description:
      "A minimal daily habit logger with streaks, reminders, and a calm dashboard view.",
    tags: ["React", "Tailwind", "Local Storage"],
  },
  {
    title: "Document Chat",
    icon: "documents" as const,
    description:
      "Upload PDFs and ask questions—semantic search and chat over your own documents.",
    tags: ["RAG", "Vector DB", "TypeScript"],
  },
] as const;

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "SQL",
  "System Design",
] as const;

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <div className="min-h-full bg-slate-900 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight text-slate-100">
            Jos Buttler
          </a>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-sky-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-20">
        {/* Hero */}
        <section className="flex flex-col items-center gap-12 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-400">
              Software Engineer
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Jos Buttler
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0 mx-auto">
              Welcome to my portfolio. I&apos;m building again after a decade away from
              tech—crafting clean, thoughtful web experiences with modern tools.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:text-sky-400"
            >
              Get in touch
            </a>
          </div>
          <HeroAvatar />
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-semibold text-slate-50">Projects</h2>
          <p className="mt-2 text-slate-400">Sample work in progress — placeholders for now.</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.title}
                className="flex flex-col rounded-xl border border-slate-700 bg-slate-800/60 p-6 transition hover:border-slate-600 hover:bg-slate-800"
              >
                <div className="mb-4 flex h-32 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/50">
                  <ProjectIcon id={project.icon} />
                </div>
                <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-slate-700/80 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-semibold text-slate-50">Skills</h2>
          <p className="mt-2 text-slate-400">
            Technologies and practices I&apos;m sharpening on this journey back.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-600 bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <h2 className="text-2xl font-semibold text-slate-50">Contact</h2>
          <p className="mt-2 max-w-md text-slate-400">
            Have a question, opportunity, or just want to say hi? Drop a message below.
          </p>
          <div className="mt-8 max-w-lg">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Jos Buttler · Built with Next.js, Tailwind CSS, and TypeScript.
      </footer>
    </div>
  );
}
