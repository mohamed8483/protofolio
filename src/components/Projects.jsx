import { projects } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import { ArrowIcon } from "./Icons.jsx";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-amber-500 light:text-amber-700">Selected work</p>
          <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">Projects</h2>
          <p className="mt-3 max-w-2xl text-muted">
            What each project does, why I made it, and what I worked on.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-amber-500/50">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-fg">{project.title}</h3>
                  {project.featured && (
                    <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 light:text-amber-700">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-muted leading-relaxed">{project.description}</p>

                {project.problem && (
                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <p className="font-mono text-xs text-amber-500 light:text-amber-700">Problem</p>
                      <p className="mt-1 text-muted">{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-emerald-500">Solution</p>
                      <p className="mt-1 text-muted">{project.solution}</p>
                    </div>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-5 pt-6">
                  {project.links?.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-amber-500 light:hover:text-amber-600"
                    >
                      Code <ArrowIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-amber-500 light:hover:text-amber-600"
                    >
                      Live Demo <ArrowIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
