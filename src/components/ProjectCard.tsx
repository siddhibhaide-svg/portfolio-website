import { ExternalLink, Github, type LucideIcon } from 'lucide-react';

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  icon: LucideIcon;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:glow-rose">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-brand/35 via-canvas to-rose/35">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
        <Icon
          className="relative h-14 w-14 text-ink/80 transition-transform duration-500 group-hover:scale-110"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Project / {project.number}
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/50 px-3 py-1 text-xs font-medium text-brand">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" aria-hidden />
            Live
          </span>
        </div>

        <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-rose">{project.category}</p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-ink">{project.title}</h3>
        <p className="mt-3 line-clamp-2 text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-xs text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:glow-rose"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:border-brand hover:text-brand hover:glow-brand"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
