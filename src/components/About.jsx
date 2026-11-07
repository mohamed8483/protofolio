import { about, stats } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-amber-500 light:text-amber-700">Background</p>
          <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">About me</h2>
          <p className="mt-3 max-w-2xl text-muted">{about.heading}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <div className="space-y-5 text-muted leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="min-w-0">
            {/* Code-style card, like the reference site */}
            <div className="w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-dim">identity.ts</span>
              </div>
              <pre className="max-w-full overflow-x-auto bg-surface p-4 font-mono text-xs leading-relaxed text-muted sm:p-5 sm:text-sm">
                {about.identityCode.split("\n").map((line, i) => (
                  <div key={i}>
                    <span className="select-none text-dim/60">{String(i + 1).padStart(2, " ")}</span>{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(
                            /(class|extends)/g,
                            '<span class="text-amber-500 light:text-amber-700">$1</span>'
                          )
                          .replace(
                            /"([^"]*)"/g,
                            '<span class="text-emerald-500">"$1"</span>'
                          )
                          .replace(/\b(\w+)(?=\s*=)/g, '<span class="text-sky-500">$1</span>')
                          .replace(/([A-Z]\w*)/g, '<span class="text-amber-500 light:text-amber-700">$1</span>'),
                      }}
                    />
                  </div>
                ))}
              </pre>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-2xl font-bold text-fg">{stat.value}</p>
                  <p className="mt-1 text-sm text-dim">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
